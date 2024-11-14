import HeaderBox from '@/components/HeaderBox'
import { Pagination } from '@/components/Pagination';
import TransactionsTable from '@/components/TransactionsTable';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import RecentTransactions from '@/components/RecentTransactions';
import React from 'react'

const TransactionHistory = async ({ searchParams }: SearchParamProps) => {
  const loggedIn = await getLoggedInUser();
  
  if (!loggedIn) {
    return null;
  }

  const accounts = await getAccounts({ userId: loggedIn.$id });
  const accountsData = accounts?.data || [];

  return (
    <div className="transaction-history">
      {accountsData.length > 0 ? (
        <RecentTransactions 
          accounts={accountsData}
          transactions={accounts?.transactions || []}
        />
      ) : (
        <div className="no-transactions">
          No bank accounts linked yet. Please add a bank account to see transactions.
        </div>
      )}
    </div>
  );
}

export default TransactionHistory