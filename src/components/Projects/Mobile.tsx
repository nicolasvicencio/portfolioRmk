import Link from "next/link";
import React from "react";

type Props = {};

export default function Mobile({}: Props) {
  return (
    <article>
      <div className="flex my-40 flex-col-reverse justify-center items-center gap-4 md:flex-row-reverse md:justify-around ">
        <div className="flex flex-col gap-4 items-center md:w-[40%] md:items-start ">
          <p className="text">
            Android App made with React native and ChatGPT API. It's an IA
            language companion
          </p>
          <Link
            href="https://fabioladecotortas.cl/"
            className="btn btn-primary"
          >
            Play Store
          </Link>
        </div>
        <div className="md:w-[45%]">
          <img src={"/portfolio3.png"} className="w-auto h-auto rounded-s" />
        </div>
      </div>

      <div className="flex my-40 flex-col-reverse justify-center items-center gap-4 md:flex-row-reverse md:justify-around ">
        <div className="flex flex-col gap-4 items-center md:w-[40%] md:items-start ">
          <h4 className="font-semibold font-md my-2">Lingu AI</h4>
          <p className="text">
            Android App made with React native and ChatGPT API. It's an IA
            language companion
          </p>
          <Link
            href="https://fabioladecotortas.cl/"
            className="btn btn-primary"
          >
            Play Store
          </Link>
        </div>
        <div className="md:w-[45%]">
          <img
            src={"/portfolio2-template.png"}
            className="w-auto h-auto rounded-s"
          />
        </div>
      </div>
    </article>
  );
}
