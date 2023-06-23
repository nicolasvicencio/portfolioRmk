import React from "react";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiReact,
  SiLinux,
  SiNextdotjs,
  SiMysql,
  SiLinkedin,
  SiGithub,
} from "react-icons/si";

type Props = {};

export default function Featured({}: Props) {
  return (
    <div className="header_img">
      <div className="w-[50%] mx-auto h-[100vh] flex items-center ">
        <article className="w-full flex justify-center">
          <div className="flex flex-col gap-6 items-center ">
            <h1 className="text-center text-white font-bold text-6xl md:text-start">
              FrontEnd Developer
            </h1>
            <p className="text-white my-4 text-xl text-center ">
              Hi There! I'm Nicolas Vicencio and my ultimate goal is building a
              succesfull website that meets your needs!
            </p>
            <div className="flex justify-evenly gap-2 md:w-[50%]">
              <button className="btn btn-outline">Check my projects</button>
              <button className="btn btn-outline">Contact me</button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
