import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React  from "react";
import { getAccounts, getAccount } from "@/lib/actions/bank.actions";
import RecentTransactions from "@/components/RecentTransactions";

const Home = async ({ searchParams : { id, page } }: SearchParamProps) => {
  const loggedIn = await getLoggedInUser();
  
  if (!loggedIn) {
    return null;
  }

  const accounts = await getAccounts({ userId: loggedIn.$id });
  const accountsData = accounts?.data || [];
  const currentPage = Number(page as string) || 1;

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account including transactions effectively."
          />

          <TotalBalanceBox 
            accounts={accountsData}
            totalBanks={accountsData.length}
            totalCurrentBalance={0}
          />
        </header>

        {accountsData.length > 0 ? (
          <RecentTransactions 
            accounts={accountsData}
            transactions={accounts?.transactions || []}
            appwriteItemId={id || accountsData[0]?.appwriteItemId}
            page={currentPage}
          />
        ) : (
          <div className="no-transactions">
            No bank accounts linked yet. Please add a bank account to see transactions.
          </div>
        )}
      </div>

      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[]}
      />
    </section>
  )
}

export default Home