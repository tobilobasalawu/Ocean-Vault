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


const MobileNav = ({user}: MobileNavProps) => {
    return (
        <section className = "w-full max-w-[264px]">
          <Sheet>
            <SheetTrigger>
              <Image src="/icons/hamburger.svg" alt="Menu" width={30} height={30}/>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </section>
    )
}

export default MobileNav;
