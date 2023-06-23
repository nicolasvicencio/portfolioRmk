import Link from "next/link";
import React from "react";

type Props = {};

export default function Web({}: Props) {
  return (
    <>
      <div className="flex my-40 flex-col-reverse justify-center gap-4 md:flex-row-reverse md:justify-around md:items-center ">
        <div className="flex flex-col gap-4 items-center md:w-[40%] md:items-start ">
          <h4 className="text-xl">Decotortas Website</h4>
          <p className="text">
            Website for a small company dedicated to the sale of custom cakes.
            Made in Wordpres.
          </p>
          <Link
            href="https://fabioladecotortas.cl/"
            className="btn btn-primary"
          >
            Live Web
          </Link>
        </div>
        <div className="md:w-[45%]">
          <img
            src={"/portfolio1-template.png"}
            className="w-auto h-auto rounded-s"
          />
        </div>
      </div>
      <div className="flex my-40 flex-col-reverse justify-center gap-4 md:flex-row-reverse md:justify-around md:items-center ">
        <div className="flex flex-col gap-4 items-center md:w-[40%] md:items-start ">
          <h4 className="text-xl">Decotortas Website</h4>
          <p className="text">
            Website for a small company dedicated to the sale of custom cakes.
            Made in Wordpres.
          </p>
          <Link
            href="https://fabioladecotortas.cl/"
            className="btn btn-primary "
          >
            Live Web
          </Link>
        </div>
        <div className="md:w-[45%]">
          <img
            src={"/portfolio1-template.png"}
            className="w-auto h-auto rounded-s"
          />
        </div>
      </div>
    </>
  );
}
