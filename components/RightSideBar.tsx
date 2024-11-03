import Link from "next/link";
import React from "react";
import Image from "next/image";

const RightSideBar = ({user, transactions, banks} : RightSideBarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        {/* class css in global.css, the className is the name of the class in the global.css stylesheet */}
        <div className="profile-banner">
        </div>
      </section>

      <section className="banks-section">
        <div className="flex w-full justify-between">
          <h2 className="header-2">My Banks</h2>
          <Link href="/" className="flex gap-2">
            <Image src="/icons/plus.svg" alt="plus" width={24} height={24} />
            <h2 className="text-14 font-semibold text-gray-600">
              Add Bank</h2>
          </Link>
        </div>

         {banks.Length > 0 && (
          <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
            <div className="relative z-10">
              BANK CARD 1
            </div>
            {banks[1] && (
              <div className="absolute right-0 top-8 z-0">
                BANK CARD 2
              </div>
            )}
          </div>
         )} 
      </section>
    </aside>
  )
}

export default RightSideBar