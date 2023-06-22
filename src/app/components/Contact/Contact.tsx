import Link from "next/link";
import React from "react";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

type Props = {};

export default function Contact({}: Props) {
  return (
    <article className="h-auto bg-gray-900 text-white py-10 ">
      <div className="flex flex-col gap-4 items-center">
        <h3 className="text-orange-500 font-bold text-xl mb-4">Contact me</h3>
        <div className="flex flex-col gap-4 md:flex-row">
          <Link
            className="flex text-gray-500 gap-2 items-center"
            href={"https://linkedin.com"}
            target={"_blank"}
          >
            <SiLinkedin className="icon text-gray-500" />
            Linkedin
          </Link>
          <Link
            className="flex text-gray-500 gap-2 items-center"
            href={"https://linkedin.com"}
            target={"_blank"}
          >
            <SiGmail className="icon text-gray-500" />
            Gmail
          </Link>
          <Link
            className="flex text-gray-500 gap-2 items-center"
            href={"https://linkedin.com"}
            target={"_blank"}
          >
            <SiGithub className="icon text-gray-500" />
            Github
          </Link>
        </div>
      </div>
    </article>
  );
}
