import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="w-full h-screen flex flex-col  justify-center">
      <article className="mx-6 md:w-[80%] md:mx-auto">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-5xl">About</h1>
          <span className="bg-[#735D4E] h-1 w-16 rounded-s mb-4"></span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
            alias dolor modi, itaque
          </p>
        </div>

        <div className="my-24 flex flex-col gap-6 items-center md:flex-row md:justify-around">
          <div className="md:w-[50%]">
            <h3 className="text-xl mb-4">A little about me!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Officiis, commodi eligendi quis laboriosam cumque qui veniam
              ullam, ipsam distinctio sed, saepe assumenda praesentium debitis
              nihil dolorum earum beatae itaque. Itaque?{" "}
            </p>
          </div>
          <div className="md:w-[50%]">
            <h3 className="text-xl mb-4">Skills</h3>
            <div className="flex gap-4 flex-wrap">
              <p className="chip">Javascript</p>
              <p className="chip">Css</p>
              <p className="chip">React</p>
              <p className="chip">NextJs</p>
              <p className="chip">React Native</p>
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