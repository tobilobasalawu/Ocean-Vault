import React from "react";
import Link from "next/link";

const RecentTransactions = ({
  accounts,
  transactions,
  appwriteItemId,
  page
}: RecentTransactionsProps) => {

  return (
    <section className="recent-transactions">
      <header className="flex items-center justify-between">
        <h2 className="recent-transactions-label">Recent Transactions</h2>
        <Link href={`/transaction-history/?id=${appwriteItemId}`} className = "view-all-btn">
          View All
        </Link>
      </header>
    </section>
  )
}

export default RecentTransactions

