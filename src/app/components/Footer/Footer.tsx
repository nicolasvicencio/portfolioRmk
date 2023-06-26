import Link from "next/link";
import React from "react";
import { SiArchlinux, SiGithub, SiLinkedin } from "react-icons/si";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="w-screen h-auto bg-gray-900 flex justify-center py-8">
      <div className="flex flex-col items-center justify-center">
          <div className="flex gap-4">
          <h4 className="text-xl text-gray-600">Socials: </h4>
              <Link
                rel="noopener noreferred"
                target="_blank"
                href={"https://github.com/nicolasvicencio"}
              >
                <SiGithub className="featured_icon" />
              </Link>
              <Link
                rel="noopener noreferred"
                target="_blank"
                href={"https://www.linkedin.com/in/nicolas-vicencio/"}
              >
                <SiLinkedin className="featured_icon" />
              </Link>
              <Link rel="noopener noreferred" target="_blank" href={"/"}>
                <SiArchlinux className="featured_icon" />
              </Link>
            </div>
      </div>
    </footer>
  );
}
