'use server';
import { createSessionClient, createAdminClient } from './appwrite';
import { ID } from 'node-appwrite';
import { cookies } from 'next/headers';
import { parseStringify } from '../utils';
import { Products, CountryCode } from 'plaid';
import { PlaidApi, Configuration } from 'plaid';
import { plaidClient } from '@/lib/plaid';

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
      const { account } = await createAdminClient();

      const newUserAccount = await account.create(
        ID.unique(), 
        email, 
        password, 
        `${firstName} ${lastName}`
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

      return parseStringify(newUserAccount);

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


