import React from "react";
import Link from "next/link";
import { formatAmount } from "@/lib/utils";
import Image from "next/image";

const BankCard = ({account, userName, showBalance = true} : CreditCardProps) => {
  return (
    <div className="flex flex-col w-full max-w-[500px]">
      <Link href="/" className="flex relative h-48 w-full">
        <div className="bank-card-left rounded-l-2xl bg-chase-gradient p-6 w-full shadow-lg">
          <div>
            <h1 className="text-16 font-semibold text-white">
              {account.name || userName}
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
                &#9679;&#9679; / &#9679;&#9679; 
              </h2>
            </div>
            <p className="text-14 font-semibold text-white tracking-[1.1px]">
              &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679;
              <span className="text-16">
                {account.mask}
              </span>
            </p>
          </article>
        </div>

        <div className="bank-card_icon">
          <Image src="/icons/Paypass.svg" alt="paypass" width={20} height={24} className="ml-14"/>
          <Image src="/icons/mastercard.svg" alt="mastercard" width={45} height={32} className="ml-14"/>
        </div>
      </Link>
    </div>
  )
}

export default BankCard;