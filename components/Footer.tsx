import React from "react";

const Footer = ({user, type} : FooterProps) => {
  return (
    <footer className="footer">
      <div className={type === 'mobile' ? "footer_name_mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-700">
          {user?.firstName[0]}
        </p>
      </div>

      <div className={type === 'mobile' ? "footer_email_mobile" : "footer_email"}>
        <h1 className="text-14 truncate font-normal text-gray-600">
          {user.name}
        </h1>
      </div>

    </footer>
  )
}

export default Footer