import Link from "next/link";
import React from "react";

type Props = {};

export default function Mobile({}: Props) {
  return (
    <div className="flex my-14 flex-col-reverse justify-center items-center gap-4 md:flex-row md:justify-around my-10">
      <div className="flex flex-col gap-4 items-center md:w-[40%] md:items-start ">
        <h4 className="font-semibold font-md my-2">Lingu AI</h4>
        <p className="text">
          Android App made with React native and ChatGPT API. It's an IA
          language companion
        </p>
        <Link href="https://fabioladecotortas.cl/" className="btn btn-primary">
          Click here to visit website{" "}
        </Link>
      </div>
      <div className="md:w-[45%]">
        <img
          src={"/portfolio2-template.png"}
          className="w-auto h-auto rounded-s"
        />
      </div>
    </div>
  );
}
