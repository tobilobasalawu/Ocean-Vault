'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

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
              <h1 className = "text-24 lg:text-26 font-semibold text-gray-900">
                {user
                ? 'Link Account'
                : type === 'sign-in'
                ? 'Sign In'
                : 'Sign Up'}

                  <p className = "text-16 font-normal text-gra">
                    {user
                    ? 'Link your account to get started'
                    : 'Please enter your details'}
                  </p>
              </h1>
            </div>
      </header>

      {user ? (
        <div className = "flex flex-col gap-4">
          {/* PlaidLink */}
        </div>
      ): (
        <div>
          FORM
        </div>
      )}

    </section>
  )
}

export default AuthForm;