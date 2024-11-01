import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";

const Sidebar = ({user}: SidebarProps) => {
  return (
    <section className="sidebar">
      <nav className="]flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
          <Image src="/icons/logo.svg" alt="Ocean-Vault Logo" width={34} height={34} className="size-[24px] max-xl:size-14"/>
          <h1 className="sidebar-logo">
            Ocean Vault
          </h1>
        </Link>

        {sidebarLinks}
      </nav>
    </section>
  )
}

export default Sidebar