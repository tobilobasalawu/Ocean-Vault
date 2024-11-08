import React from "react";
import Image from "next/image";
import { logoutAccount } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";
const Footer = ({user, type} : FooterProps) => {

  const router = useRouter();

  const handleLogout = async () => {
   const loggedOut = await logoutAccount();
   if (loggedOut) {
    router.push('/sign-in');
   }
  }

  return (
    <footer className="footer">
      <div className={type === 'mobile' ? "footer_name_mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-700 mr-1">
          {user?.name[0]}
        </p>
      </div>

      <div className={type === 'mobile' ? "footer_email_mobile" : "footer_email"}>
        <h1 className="text-14 truncate font-semibold text-gray-700 mb-0">
          {user?.name}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600 mt-0">
          {user?.email}
        </p>
      </div>

      <div className="footer_image" onClick={handleLogout}>
        <Image src="/icons/logout.svg" fill alt="Logout"/>
      </div>

    </footer>
  )
}

export default Footer