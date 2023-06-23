import { Inter } from "next/font/google";
import Link from "next/link";
import { TypeAnimationComponent } from "./components";
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
        <header className="w-full h-auto p-4 shadow-md bg-transparent text-white absolute">
          <div className="w-[90%] mx-auto flex justify-between flex items-center">
            <div className="flex gap-4 items-center">
              <img
                src="/profile.jpg"
                alt="profile"
                className="h-10 w-10 rounded-full border-orange-500 "
              />
              <h1 className="text-xl">Nicolas Vicencio</h1>
            </div>
            <nav className="flex gap-6  ">
              <Link href="/">Home</Link>
              <Link href="/">About</Link>
              <Link href="/">Projects</Link>
              <Link href="/">Contact me</Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
