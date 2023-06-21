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
    <div className="w-[80%] mx-auto md:h-[100vh] flex items-center">
      <article className=" w-full mt-8 flex flex-col gap-8 items-center md:flex-row-reverse md:justify-around md:gap-4 md:items-center md:mt-0">
        <div className="flex flex-col justify-center items-center gap-4">
          <img
            src="profile.jpg"
            className="rounded-full w-56 h-56 shadow-orange-300 shadow-md"
          />
          <div className="flex gap-4">
            <SiGithub className="icon text-gray-700" />
            <SiLinkedin className="icon text-gray-700" />
          </div>
        </div>
        <div className="flex flex-col gap-6 md:w-[40%]">
          <h1 className="text-center text-orange-600 font-bold text-4xl md:text-start">
            FrontEnd Web/Mobile Developer
          </h1>
          <p className="text-gray-600 my-4 ">
            Hi there! I'm Nicolas Vicencio, a developer who works in React
            ecosystem, I'm from Santiago Chile!
          </p>
          <div>
            <h3 className="font-semibold text-center md:text-start">
              Technologies
            </h3>
            <div className="flex gap-2 my-2 justify-center md:justify-start">
              <SiReact className="icon text-blue-600" />
              <SiNextdotjs className="icon text-gray-700" />
              <SiTailwindcss className="icon text-sky-600" />
              <SiMongodb className="icon text-green-800" />
              <SiMysql className="icon text-sky-800" />
              <SiExpress className="icon text-gray-900" />
              <SiLinux className="icon text-gray-800" />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
