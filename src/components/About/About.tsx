import React from "react";
import { MacIcon } from "../icons";

type Props = {};

export default function About({}: Props) {
  return (
    <div
      className="min-h-screen w-[90%] mx-auto flex flex-col justify-center items-evenly "
      id="about"
    >
      {" "}
      <div className="flex flex-col gap-6">
        <div className="w-[30%] mx-auto flex flex-col gap-4 items-center">
          <h2 className="text-subtitle text-5xl">About</h2>
          <span className="bg-primary h-1 w-1/5 rounded-full"></span>
        </div>
        <h3 className="text-center text-content font-semibold text-title text-xl">
          Developing websites with purpose!
        </h3>
      </div>
      <article className="mx-6 flex flex-col md:w-[80%] md:mx-auto md:flex-row md:gap-10 md:justify-between ">
        <div className="my-24 md:w-[55%] flex flex-col gap-10 ">
          <div className="flex flex-col gap-2">
            <h3 className="text-md text-subtitle font-semibold text-xl mb-2">
              A little about me!
            </h3>
            <p className="text">
              Hi I'm Nicolas Vicencio programmer analyst. I'm passionate about
              the Tech industry and the construction of Web pages. I'm mainly
              dedicated to the front end of Web sites (layout, design, UX, UI) I
              enjoy learning new technologies and different ways of working. My
              goal is to help you build the website you want.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold mb-2 text-subtitle">Skills</h3>

            <div className="flex gap-4 flex-wrap">
              <p className="chip">Javascript</p>
              <p className="chip">Css</p>
              <p className="chip">React</p>
              <p className="chip">NextJs</p>
              <p className="chip">React Native</p>
              <p className="chip">TailwindCss</p>
              <p className="chip">NodeJs</p>
              <p className="chip">Express</p>
              <p className="chip">MongoDB</p>
              <p className="chip">MySql</p>
              <p className="chip">Supabase</p>
              <p className="chip">Linux</p>
              <p className="chip">Terminal</p>
            </div>
          </div>
        </div>
        <section className="flex justify-center items-center">
          <MacIcon />
        </section>
      </article>
    </div>
  );
}
