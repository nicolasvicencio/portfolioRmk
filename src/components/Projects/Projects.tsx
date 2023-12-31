"use client";
import React from "react";
import Web from "./Web";
import Mobile from "./Mobile";

type Props = {};

export default function Projects({}: Props) {
  return (
    <article
      className="min-h-screen my-20 mt-40 w-[80%] mx-auto flex flex-col justify-center items-center"
      id="projects"
    >
      <div className="flex flex-col justify-center gap-4">
        <div className="flex flex-col gap-6">
          <div className="w-[30%] mx-auto flex flex-col gap-4 items-center">
            <h2 className="text-subtitle text-5xl">Projects</h2>
            <span className="bg-primary h-1 w-1/5 rounded-full"></span>
          </div>
          <h3 className="text-center text-content font-semibold text-title text-xl">
            Feel free to check out some of my work
          </h3>
        </div>
      </div>
      <section className="mt-20">
        <Web />
      </section>
    </article>
  );
}
