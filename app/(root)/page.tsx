import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React  from "react";
import { getAccounts, getAccount } from "@/lib/actions/bank.actions";
import RecentTransactions from "@/components/RecentTransactions";

const Home = async ({ searchParams : { id, page } }: SearchParamProps) => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ userId: loggedIn?.$id });
  const accountsData = accounts?.data;
  const currentPage = Number(page as string) || 1;

  if (!accounts) return;

  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
  const account = await getAccount({ appwriteItemId });

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext = "Access and manage your account including transactions effectively."
          />

          <TotalBalanceBox 
            accounts = {accountsData}
            totalBanks = {accountsData?.totalBanks}
            totalCurrentBalance = {accountsData?.totalCurrentBalance}
          />
        </header>

        <RecentTransactions 
          accounts = {accountsData}
          transactions = {accounts?.transactions}
          appwriteItemId = {appwriteItemId}
          page = {currentPage}
        />

      </div>

      <RightSideBar
        user = {loggedIn}
        transactions = {accounts?.transactions}
        banks = {[accountsData?.slice(0, 2)]}
      />

    </section>
  )
}

export default Home