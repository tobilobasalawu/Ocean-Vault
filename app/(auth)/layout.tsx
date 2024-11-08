import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-center font-inter">
      {children}
      <div className="auth-asset" >
        <div className=''>
        <Image src="/icons/auth-img.svg" alt="auth-image" width={500} height={500}/>
        </div>
      </div>
    </main>
  );
}
