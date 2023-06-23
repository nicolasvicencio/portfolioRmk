"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Web from "./Web";
import Mobile from "./Mobile";

type Props = {};

export default function Projects({}: Props) {
  const [toggleProjects, setToggleProjects] = useState<boolean>(true);
  return (
    <article className="h-auto w-[80%] mx-auto " id="projects">
      <div className="flex flex-col items-center my-40 ">
        <h3 className="title">Projects</h3>
        <span className="subline "></span>
        <div className="flex gap-6">
          <button
            onClick={() => setToggleProjects(true)}
            className={`selector_button_project ${
              toggleProjects && "bg-[#735D4E] text-white"
            }`}
          >
            Web
          </button>
          <button
            onClick={() => setToggleProjects(false)}
            className={`selector_button_project ${
              !toggleProjects && "bg-[#735D4E] text-white"
            }`}
          >
            Mobile
          </button>
        </div>
      </div>
      {toggleProjects && <Web />}
      {!toggleProjects && <Mobile />}
    </article>
  );
}
