import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React  from "react";

const Home = () => {
  const loggedIn = {firstName: "Sarah"};

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn ? loggedIn.firstName : "Guest"}
            subtext = "Access and manage your account including transactions effectively."
          />

          <TotalBalanceBox 
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance = {2100.05}
          />
        </header>

        Recent Transactions
      </div>

      <RightSideBar
        user = {loggedIn}
        transactions = {[]}
        banks = {[{currentBalance: 3578.90}, {currentBalance: 2080.90}]}
      />

    </section>
  )
}

export default Home