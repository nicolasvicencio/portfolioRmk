"use client";
import React from "react";
import Web from "./Web";
import Mobile from "./Mobile";
import WaveAnimated from "@/app/animate/WaveAnimated";

type Props = {};

export default function Projects({}: Props) {
  return (
    <article className="h-auto w-[80%] mx-auto fade-in" id="projects">
      <WaveAnimated className="flex flex-col items-center gap-2">
        <h1 className="title">Projects</h1>
        <span className="subline "></span>
        <p className="text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, alias
          dolor modi, itaque
        </p>
      </WaveAnimated>
      <Web />
      <Mobile />
    </article>
  );
}
