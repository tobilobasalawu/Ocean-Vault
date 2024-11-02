import React from "react";

const RightSideBar = ({user, transactions, banks} : RightSideBarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        {/* class css in global.css, the className is the name of the class in the global.css stylesheet */}
        <div className="profile-banner">
        </div>
      </section>

      <section className="banks-section">
        <div className="flex w-full justify-between">
          <h2 className="header-2">Banks</h2>	
        </div>
      </section>
    </aside>
  )
}

export default RightSideBar