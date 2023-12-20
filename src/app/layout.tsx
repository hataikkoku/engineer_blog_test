import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Link href="/">
          <h1 className="text-3xl text-white font-bold">AIFUL Blog</h1>
        </Link>
        <p className="text-slate-300">Welcome to our page</p>
       
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-6 py-6 text-center text-slate-400">
  
        <h3>developed by AIFUL</h3>
      </div>
    </footer>
  );

  return (
    <html>
      <head />
      <body>
        <div className="mx-auto  max-w-6xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
