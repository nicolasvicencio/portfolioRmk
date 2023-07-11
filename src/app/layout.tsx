import { Open_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const open = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Web Developer, Nicolas Vicencio",
  description: "Web Developer, Nicolas Vicencio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={open.className}>
        <header className="w-full h-auto p-2 shadow-md bg-stone-950 text-white z-10 fixed ">
          <div className="w-[90%] mx-auto flex justify-between items-center">
            <Link
              href={"#home"}
              scroll={false}
              className="flex gap-4 items-center"
            >
              <img
                src="/profile.jpg"
                alt="profile"
                className="h-10 w-10 rounded-full border-2 border-primary"
              />
              <h1 className="text-xl font-semibold hover:text-primary transition-all">
                Nicolas Vicencio
              </h1>
            </Link>
            <nav className="flex gap-6 z-10 items-center font-semibold">
              <Link
                scroll={false}
                href="/"
                className="hover:text-primary transition-all"
              >
                Home
              </Link>
              <Link
                scroll={false}
                className="hover:text-primary transition-all"
                href="#about"
              >
                About
              </Link>
              <Link
                scroll={false}
                className="hover:text-primary transition-all"
                href="#services"
              >
                Services
              </Link>
              <Link
                scroll={false}
                href="#projects"
                className="hover:text-primary transition-all"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="btn btn-primary hover:bg-white hover:text-gray-900 transition-all"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
