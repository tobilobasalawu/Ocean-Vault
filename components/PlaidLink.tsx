import React from "react";
import { Button } from "./ui/button";

const PlaidLink = ({user, variant}: PlaidLinkProps) => {
  return(
    <>
      {variant === 'primary' ? (
        <Button>
          Link Bank Account
        </Button>
      ): variant === 'ghost' ? (
        <button>
           Link Bank Account
        </button>
      ): (
        <Button>
          Link Bank Account
        </Button>
      )}
    </>
  )
};

export default PlaidLink;
