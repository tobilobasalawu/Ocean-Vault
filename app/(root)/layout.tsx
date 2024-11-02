import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName: "Sarah", lastName: "Hadjin"};
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user = {loggedIn}/>

    <div className = "flex size-full flex-col">
      <div className = "root-layout">
        <Image src="/icons/logo.svg" alt="Menu Icon" width={34} height={34}/>
        <div>
          
        </div>
      </div>
    </div>

      {children}
    </main>
  );
}
