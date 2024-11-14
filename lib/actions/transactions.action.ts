import { createTransfer } from "@/lib/actions/dwolla.actions";
import { createAdminClient } from "../appwrite";
import { channel } from "diagnostics_channel";



const {
  APPWRITE_DATABASE_ID : DATABASE_ID,
  APPWRITE_TRANSACTIONS_COLLECTION_ID : TRANSACTIONS_COLLECTION_ID,
} = process.env;

export const createTransaction = async (transaction: createTransactionProps) => {
  try {
    const {database} = await createAdminClient();
    const newTransaction = await database.createDocument(
      DATABASE_ID!,
      TRANSACTIONS_COLLECTION_ID!,
      ID.unique(),
      {
        channel: 'online',
        category: 'Transfer',
        ...transaction,
      }
    );
    return parseStringify(newTransaction);
  } catch (error) {
    console.log(error);
  }
}