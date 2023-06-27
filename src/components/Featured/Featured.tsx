import Link from "next/link";
import React from "react";
import { Raleway } from "next/font/google";
import { SiLinkedin, SiArchlinux, SiGithub } from "react-icons/si";

type Props = {};

export default function Featured({}: Props) {
  return (
    <div className="header_img" id="home">
      <div className="w-[50%] mx-auto h-[100vh] flex items-center ">
        <article className="w-full flex justify-center">
          <div className="flex flex-col gap-6 items-center ">
            <h1 className="text-center text-white font-bold text-6xl md:text-start">
              FrontEnd Developer
            </h1>
            <p className="text-white mt-4 text-xl text-center ">
              Hi There! I'm Nicolas Vicencio and my ultimate goal is building a
              succesfull website that meets your needs!
            </p>
            <div className="flex gap-4">
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
            <div className="flex justify-evenly gap-2 md:w-[50%]">
              <Link className="btn btn-outline" scroll={false} href="#projects">
                My projects
              </Link>
              <Link className="btn btn-outline" scroll={false} href="#contact">
                Contact
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
