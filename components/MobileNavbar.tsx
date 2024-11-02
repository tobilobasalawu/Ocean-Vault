'use client'

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants";

const MobileNav = ({user}: MobileNavProps) => {
  const pathname = usePathname();	
    return (
        <section className = "w-full max-w-[264px]">
          <Sheet>
            <SheetTrigger>
              <Image src="/icons/hamburger.svg" alt="Menu" width={30} height={30}/>
            </SheetTrigger>
            <SheetContent side = "left">
            <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
              <Image src="/icons/logo.svg" alt="Ocean-Vault Logo" width={34} height={34} className="size-[24px] max-xl:size-14"/>
              <h1 className="sidebar-logo">
                Ocean Vault
              </h1>
            </Link>

            {sidebarLinks.map((item) => {

              const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

              return (
                <Link href={item.route} key = {item.label} 
                  className = {cn ('sidebar-link', {'bg-bank-gradient' : isActive})}>
                  <div className="relative size-6">
                    <Image src={item.imgURL} alt={item.label} fill className={cn ({'brightness-[3] invert-0': isActive})}/>
                  </div>
                  <p className={cn ('sidebar-label', {'!text-white': isActive})}>
                    {item.label}
                  </p>
                </Link>
          )
        })}
            </SheetContent>
          </Sheet>
        </section>
    )
}

export default MobileNav;
