import React, { useCallback, useState, useEffect } from "react";
import { Button } from "./ui/button";
import { PlaidLinkOptions, usePlaidLink, PlaidLinkOnSuccess } from "react-plaid-link";
import { useRouter } from "next/navigation";
import { createLinkToken, exchangePublicToken } from "@/lib/actions/user.actions";
import Image from "next/image";


const PlaidLink = ({user, variant}: PlaidLinkProps) => {

  const router = useRouter();

  const [token, setToken] = useState('');
  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user);
      setToken(data?.linkToken);
    };
    getLinkToken();
  }, []);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string) => {
    await exchangePublicToken({publicToken: public_token, user});
    router.push('/');
  }, [user]);

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  }

  const {open, ready} = usePlaidLink(config);

  return(
    <>
      {variant === 'primary' ? (
        <Button onClick={() => open()} disabled={!ready} className = "plaidlink-primary">
          Link Bank Account
        </Button>
      ): variant === 'ghost' ? (
        <Button onClick={() => open()} variant="ghost" className="plaidlink-ghost">
          <Image 
            src="/icons/connect-bank.svg"
            alt="Link Bank Account"
            width={24}
            height={24}
          />
           <p className='hiddenl text-[16px] font-semibold text-black-2 xl:block'>Link Bank Account</p>
        </Button>
      ): (
        <Button onClick={() => open()} className="plaidlink-default">
           <Image 
            src="/icons/connect-bank.svg"
            alt="connect bank"
            width={24}
            height={24}
          />
          <p className='text-[16px] font-semibold text-black-2'>Link Bank Account</p>
        </Button>
      )}
    </>
  )
};

export default PlaidLink;
