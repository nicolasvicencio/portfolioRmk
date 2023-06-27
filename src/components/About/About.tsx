import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <div
      className="h-screen w-[80%] mx-auto flex flex-col justify-center items-evenly "
      id="about"
    >
      {" "}
      <div className="flex flex-col gap-6">
        <div className="w-[30%] mx-auto flex flex-col gap-4 items-center">
          <h2 className="text-subtitle text-5xl">About</h2>
          <span className="bg-primary h-1 w-1/5 rounded-full"></span>
        </div>
        <h3 className="text-center text-content font-semibold text-title text-xl">
          Developing websites with purpose since the dinosaurs!
        </h3>
      </div>
      <article className="mx-6 md:w-[80%] md:mx-auto">
        <div className="my-24 flex flex-col gap-6  md:flex-row md:justify-around">
          <div className="md:w-[50%] flex flex-col gap-2">
            <h3 className="text-md text-subtitle font-semibold text-xl flex-6">
              A little about me!
            </h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Officiis, commodi eligendi quis laboriosam cumque qui veniam
              ullam, ipsam distinctio sed, saepe assumenda praesentium debitis
              nihil dolorum earum beatae itaque. Itaque?{" "}
            </p>
          </div>

          <div className="md:w-[50%] flex flex-col gap-2">
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
      </article>
    </div>
  );
}
