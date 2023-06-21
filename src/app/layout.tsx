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
        <header className="w-full h-auto p-4">
          <div className="w-[90%] mx-auto flex justify-between ">
            <TypeAnimationComponent />
            <nav className="flex gap-2  ">
              <Link href="/">Home</Link>
              <Link href="/">About me</Link>
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
