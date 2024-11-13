import React from "react";
import HeaderBox from "@/components/HeaderBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { getAccounts, getAccount } from "@/lib/actions/bank.actions";
import { formatAmount } from "@/lib/utils";
import TransactionsTable from "@/components/TransactionsTable";

const TransactionHistory = async ({searchParams: {id, page}} : SearchParamProps) => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ userId: loggedIn?.$id });
  const accountsData = accounts?.data;
  const currentPage = Number(page as string) || 1;

  if (!accounts) return;

  const appwriteItemId = (id as string) || accountsData[0].appwriteItemId;
  const account = await getAccount({ appwriteItemId });

  return (
    <div className="transactions">
      <div className="transaction-header">
        <HeaderBox
          title="Transaction History"
          subtext="See your bank details and transactions"
          user={loggedIn?.firstName || "Guest"}
          type="greeting"
        />
      </div>

      <div className="space-y-6">
        <div className="transactions-account">
          <div className = "flex flex-col gap-2">
            <h2 className="text-18 font-bold text-white">{account?.data.name}</h2>
            <p className="text-14 text-blue-25">
              {account?.data.officialName}
            </p>
            <p className="text-14 font-semibold text-white tracking-[1.1px]">
              ●●●● ●●●● ●●●●
              {account?.mask}
            </p>
          </div>

          <div className="transactions-account-balance">
            <p className="text-14">
              Current Balance
            </p>
            <p className="text-24 font-bold text-center">
              {formatAmount(account?.data.currentBalance)}
            </p>
          </div>
        </div>

        <section className="flex w-full flex-col gap-6">
          <TransactionsTable 
            transactions={account?.transactions}
          />
        </section>
      </div>
    </div>
  )
}

export default TransactionHistory;