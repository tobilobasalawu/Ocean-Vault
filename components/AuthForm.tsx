'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button"
import CustomInput from "@/components/CustomInput";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { signUp, signIn } from "@/lib/actions/user.actions";
import PlaidLink from "./PlaidLink";

const AuthForm = ({type}: {type: string}) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);


  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    })
   
    // 2. Define a submit handler.
    const onSubmit = async (data: z.infer<typeof formSchema>) => {
      setIsLoading(true);
      // Do something with the form values.
      // ✅ This will be type-safe and validated.

      try{
        // Sign up with Appwrite & create plaid token 

        if (type === 'sign-up'){
          const newUser = await signUp(data);

          setUser(newUser);
        } 

        if (type === 'sign-in'){
            const response = await signIn({
              email: data.email,
              password: data.password,
            });

            if (response) router.push('/');
        }

        } catch (error) { 
          console.log(error)
        } finally {
          setIsLoading(false);
        }
      }

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
                    : 'Sign Up'
                }

                  <p className = "text-16 font-normal text-gra">
                    {user
                    ? 'Link your account to get started'
                    : 'Please enter your details'}
                  </p>
              </h1>
            </div>
      </header>

      {/*{user ? ( */}
        <div className = "flex flex-col gap-4">
          {/* PlaidLink */}
          <PlaidLink user={user} variant='primary'/>
        </div>
      {/* ): ( */}
        <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                {type === 'sign-up' && (
                  <>
                  <div className="flex gap-4">
                    <CustomInput 
                      control = {form.control}
                      name = "firstName"
                      label = "First Name"
                      placeholder = "Example: John"
                      type = "text"
                    />
                    <CustomInput 
                      control = {form.control}
                      name = "lastName"
                      label = "Last Name"
                      placeholder = "Example: Doe"
                      type = "text"
                    />
                  </div>

                  <CustomInput 
                    control = {form.control}
                    name = "address"
                    label = "Address"
                    placeholder = "Example: 123 Main St"
                    type = "text"
                  />

                  <CustomInput 
                    control = {form.control}
                    name = "city"
                    label = "City"
                    placeholder = "Example: London"
                    type = "text"
                  />

                  <div className="flex gap-4">
                    <CustomInput 
                      control = {form.control}
                      name = "region"
                      label = "Region (county)"
                      placeholder = "Example: West Midlands"
                      type = "text"
                    />
                    <CustomInput 
                      control = {form.control}
                      name = "postalCode"
                      label = "Postal Code"
                      placeholder = "Example: AB1 457"
                      type = "text"
                    />
                  </div>

                  <CustomInput 
                    control = {form.control}
                    name = "dateOfBirth"
                    label = "Date of Birth"
                    placeholder = "Example: 01/01/2024"
                    type = "date"
                  />
                  </>
                )} 

                <CustomInput
                  control = {form.control}
                  name = "email"
                  label = "Email"
                  placeholder = "Enter your email"
                  type = "email"
                />

                  <CustomInput
                    control = {form.control}
                    name = "password"
                    label = "Password"
                    placeholder = "Enter your password"
                    type = "password"
                  />

                <div className = "flex flex-col gap-4">
                  <Button type="submit" disabled = {isLoading} className ="form-btn">
                    {isLoading ? (
                      <>
                        <Loader2 size={20} className="animate-spin"/> &nbsp;
                        Loading...
                      </>
                    ): type === 'sign-in'
                      ? 'Sign In' : 'Sign Up'}
                  </Button>
                </div>

              </form>
            </Form>

            <footer className = "flex justify-center gap-1">
              <p className = "text-14 font-normal text-gray-600 mt-5">
                {type === 'sign-in'
                ? "Don't have an account?"
                : "Already have an account?"}
              </p>
              <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className="form-link mt-5">
                {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
              </Link>
            </footer>

        </div>
      {/* )} */}

    </section>
  )
}

export default AuthForm;