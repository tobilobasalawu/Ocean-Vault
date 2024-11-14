import React from "react";
import Link from "next/link";
import { formatAmount } from "@/lib/utils";
import Image from "next/image";
import Copy from "@/components/Copy";

const BankCard = ({account, userName, showBalance = true} : CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link href={`/transaction-history/?id=${account.appwriteItemId}`} className="bank-card">
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">
              {account.name}
            </h1>
            <p className="font-ibm-plex-sans text-12 font-black text-white">
              {formatAmount(account.currentBalance)}
            </p>
          </div>

          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white">
                {userName}
              </h1>
              <h2 className="text-12 font-semibold text-white">
                ●● / ●● 
              </h2>
            </div>
            <p className="text-14 font-semibold text-white tracking-[1.1px]">
              ●●●● ●●●● ●●●●
              <span className="text-16">
                {account?.mask}
              </span>
            </p>
          </article>
        </div>

        <div className="bank-card_icon">
          <Image src="/icons/Paypass.svg" alt="paypass" width={20} height={24} className="ml-14"/>
          <Image src="/icons/mastercard.svg" alt="mastercard" width={45} height={32} className="ml-14"/>
        </div>

        <Image src="/icons/butterflyMask.png" 
          alt="butterfly" 
          width={342} 
          height={184} 
          className="absolute h-[184px] w-[350px] top-1"/>
      </Link>
      {showBalance && <Copy title={account?.sharableId} />}
    </div>
  )
}

export default BankCard;