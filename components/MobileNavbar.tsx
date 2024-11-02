'use client'

import React from "react";
import {
  Sheet,
  SheetClose,
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
            <SheetContent side = "left" className = "border-none bg-white"> 
            <Link href="/" className="cursor-pointer flex items-center gap-1 px-4">
              <Image src="/icons/logo.svg" alt="Ocean-Vault Logo" width={34} height={34}/>
              <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
                Ocean Vault
              </h1>
            </Link>

            <div className = "mobilenav-sheet">
              <SheetClose asChild>
                <nav className= "flex h-full flex-col gap-6 pt-16 text-white">
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
                </nav>
              </SheetClose>
            </div>
            </SheetContent>
          </Sheet>
        </section>
    )
}

export default MobileNav;
