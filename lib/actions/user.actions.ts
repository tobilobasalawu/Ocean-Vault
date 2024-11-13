'use server';
import { createSessionClient, createAdminClient } from './appwrite';
import { ID } from 'node-appwrite';
import { cookies } from 'next/headers';
import { parseStringify } from '../utils';
import { Products, CountryCode } from 'plaid';
import { PlaidApi, Configuration, ProcessorTokenCreateRequest, ProcessorTokenCreateRequestProcessorEnum } from 'plaid';
import { plaidClient } from '@/lib/plaid';
import { encryptId } from '@/lib/utils';
import { revalidatePath } from 'next/cache';

const{
  APPWRITE_DATABASE_ID: DATABASE_ID,
  APPWRITE_USER_COLLECTION_ID: USER_COLLECTION_ID,
  APPWRITE_BANK_COLLECTION_ID: BANK_COLLECTION_ID,
} = process.env;

export const signIn = async ({email, password} : signInProps) => {
  try {
    //Mutation / Database / Make fetch
    const { account } = await createAdminClient()

    const response = await account.createEmailPasswordSession(
      email, 
      password
    );
    return parseStringify(response);
  } catch (error) {
    console.log('Error', error)
  }
}

export const signUp = async (userData: SignUpParams) => {
  const { email, password, firstName, lastName} = userData;

  try {
    //Create user in Appwrite
      const { account, database } = await createAdminClient();

      let newUserAccount;

      const newUserAccount = await account.create(
        ID.unique(), 
        email, 
        password, 
        `${firstName} ${lastName}`
      );

      if(!newUserAccount) throw new Error('Failed to create user');

      const dwollaCustomerUrl = await createDwollaCustomer({
        ...userData,
        type: 'personal',
      });

      if(!dwollaCustomerUrl) throw new Error('Failed to create Dwolla customer');

      const dwollaCustomerId = extractCustomerIdFromUrl(dwollaCustomerUrl);

      const newUser = await database.createDocument(
        DATABASE_ID!,
        USER_COLLECTION_ID!,
        ID.unique(),
        {...userData, userId: newUserAccount.$id, dwollaCustomerId, dwollaCustomerUrl}
      );

      const session = await account.createEmailPasswordSession(
        email, 
        password
      );
    
      cookies().set("appwrite-session", session.secret, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true,
      });

      return parseStringify(newUser);

  } catch (error) {
    console.log('Error', error)
  }
}

// ... your initilization functions

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();
    return parseStringify(user);
  } catch (error) {
    return null;
  }
}

export const logoutAccount = async () => {
  try{
    const { account } = await createSessionClient();
    cookies().delete("appwrite-session");

    await account.deleteSession("current");
  } catch (error){
    return null;
  }
}

export const createLinkToken = async (user: User) => {
  try{
    const tokenParamas = {
      user: {
        client_user_id: user.$id,
      },
      client_name: user.name,
      products: ['auth'] as Products[],
      language: 'en',
      country_codes: ['US', 'GB'] as CountryCode[],
    }

    const response = await plaidClient.linkTokenCreate(tokenParamas);

    return parseStringify({linkToken: response.data.link_token});
  } catch(error){
    console.log('Error', error);
  }
}

export const createBankAccount = async ({
  userId, 
  bankId, 
  accountId, 
  accessToken, 
  fundingSourceUrl, 
  sharableId, }: createBankAccountProps) => {
  try {
    const { database } = await createAdminClient();

    const bankAccount = await database.createDocument(
      DATABASE_ID!,
      BANK_COLLECTION_ID!,
      ID.unique(),
      {userId, bankId, accountId, accessToken, fundingSourceUrl, sharableId}
    );

    return parseStringify(bankAccount);
  } catch (error){
    console.log('Error', error);
  }
}

export const exchnagePublicToken = async ({
  publicToken,
  user,
}: exchangePublicTokenProps) => {
  try{
    const response = await plaidClient.itemPublicTokenExchange({
      public_token: publicToken,
    });

    const accessToken = response.data.access_token;
    const itemId = response.data.item_id;

    const accountsResponse = await plaidClient.accountsGet({
      access_token: accessToken,
    });

    const accountData = accountsResponse.data.accounts[0];

    const request : ProcessorTokenCreateRequest = {
      access_token: accessToken,
      account_id: accountData.account_id,
      processor: "dwolla" as ProcessorTokenCreateRequestProcessorEnum,
    };

    const processorTokenResponse = await plaidClient.processorTokenCreate(request);
    const processorToken = processorTokenResponse.data.processor_token;
   // const response = await plaidClient.processorStripeBankAccountTokenCreate(request);

   //funding sources URL; 
   const fundingSourceUrl = await addFundingSource({
    dwollaCustomerId: user.dwollaCustomerId,
    processorToken,
    bankName: accountData.name,
   });

   //if funding source URL is not created, throw an error
   if (!fundingSourceUrl) throw  Error;

   //create a bank account if funding source exists
   await createBankAccount({
    userId: user.$id,
    bankId: itemId,
    accountId: accountData.account_id,
    accessToken,
    fundingSourceUrl,
    sharableId: encryptId(accountData.account_id),
    
   });

   //Revalidate the path to reflect changes
   revalidatePath('/');

    return parseStringify({
      publicTokenExchange: complete,
    });
  } catch (error){
    console.log('Error', error);
  }

}