import Link from "next/link";
import React from "react";
import { DesignIcon, ToolIcon, WebIcon } from "../icons";

type Props = {};

export default function Services({}: Props) {
  return (
    <section id="services" className="min-h-screen w-full bg-stone-100 py-20">
      <div className="w-[80%] h-full mx-auto flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col gap-6">
          <div className="w-[30%] mx-auto flex flex-col gap-4 items-center">
            <h2 className="text-subtitle text-5xl">Services</h2>
            <span className="bg-primary h-1 w-1/5 rounded-full"></span>
          </div>
          <h3 className="text-center text-content font-semibold text-title text-xl">
            What can I do for you?
          </h3>
        </div>

        <div className="flex flex-col md:flex-row justify-evenly gap-4 my-10">
          <article className="flex flex-col items-center gap-4 p-8 rounded-md text-center shadow-xl bg-white">
            <WebIcon className="text-primary" />
            <h3 className="text-xl font-semibold  text-gray-700">
              Web Programming
            </h3>
            <p className="text-gray-500">
              Website and Web application development. I help you build your
              digital project.
            </p>
          </article>
          <article className="flex flex-col items-center gap-4 p-8 rounded-md text-center shadow-xl bg-white">
            <DesignIcon className="text-primary" />
            <h3 className="text-xl font-semibold text-gray-700">
              Website Design
            </h3>
            <p className="text-gray-500">
              Responsive, usable, interactive and end-user optimized Web design
              and layout
            </p>
          </article>
          <article className="flex flex-col items-center gap-4 p-8 rounded-md text-center shadow-xl bg-white">
            <ToolIcon className="text-primary" />
            <h3 className="text-xl font-semibold text-gray-700">Tools</h3>
            <p className="text-gray-500">
              Maintenance and scalability for your application, take your site
              to the next level.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
