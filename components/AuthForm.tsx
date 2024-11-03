import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AuthForm = ({type}: {type: string}) => {
  const [user, setUser] = useState(null);
  return (
    <section className = "auth-form">
      <header className = "flex flex-col gap-5 md:gap-8">
            <Link href="/" className="cursor-pointer flex items-center gap-1">
              <Image src="/icons/logo.svg" alt="Ocean-Vault Logo" width={34} height={34}/>
              <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
                Ocean Vault
              </h1>
            </Link>

            <div className = "flex flex-col gap-1 md:gap-3">
              <h1>
                {user}
              </h1>
            </div>
            
      </header>
    </section>
  )
}

export default AuthForm;