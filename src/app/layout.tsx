import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NicoDev Portfolio",
  description: "Frontend developer react",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="w-full h-auto p-4 shadow-md text-white fixed z-10 bg-[#0B0B0D] ">
          <div className="w-[90%] mx-auto flex justify-between items-center">
            <Link
              href={"#home"}
              scroll={false}
              className="flex gap-4 items-center"
            >
              <img
                src="/profile.jpg"
                alt="profile"
                className="h-10 w-10 rounded-full border-orange-500 "
              />
              <h1 className="text-xl">Nicolas Vicencio</h1>
            </Link>
            <nav className="flex gap-6 z-10">
              <Link scroll={false} href="#home">
                Home
              </Link>
              <Link scroll={false} href="#about">
                About
              </Link>
              <Link scroll={false} href="#projects">
                Projects
              </Link>
              <Link scroll={false} href="#contact">
                Contact me
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
