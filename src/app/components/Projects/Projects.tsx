import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Projects({}: Props) {
  return (
    <article className="mt-8 w-[80%] mx-auto  md:mt-0">
      <div className="flex  my-4 flex-col-reverse justify-center gap-4 md:flex-row md:justify-around my-10">
        <div className="flex flex-col gap-4 items-center md:w-[40%] md:items-start ">
          <h4 className="font-semibold font-md my-2">Decotortas Website</h4>
          <p className="text-gray-800">
            Website for a small company dedicated to the sale of custom cakes.
            Made in Wordpres.
          </p>
          <Link
            href="https://fabioladecotortas.cl/"
            className="btn btn-primary"
          >
            Click here to visit website{" "}
          </Link>
        </div>
        <div className="md:w-[45%]">
          <img src={"/portfolio1.png"} className="w-auto h-auto rounded-s" />
        </div>
      </div>
      <div className="flex  my-4 flex-col-reverse justify-center gap-4 md:flex-row-reverse md:justify-around">
        <div className="flex flex-col gap-4 items-center md:w-[40%] md:items-start ">
          <h4 className="font-semibold font-md my-2">Decotortas Website</h4>
          <p className="text-gray-800">
            Website for a small company dedicated to the sale of custom cakes.
            Made in Wordpres.
          </p>
          <Link
            href="https://fabioladecotortas.cl/"
            className="btn btn-primary"
          >
            Click here to visit website{" "}
          </Link>
        </div>
        <div className="md:w-[45%]">
          <img src={"/portfolio1.png"} className="w-auto h-auto rounded-s" />
        </div>
      </div>

      <div className="flex  my-4 flex-col-reverse justify-center gap-4 md:flex-row-reverse md:justify-around">
        <div className="flex flex-col gap-4 items-center md:w-[40%] md:items-start ">
          <h4 className="font-semibold font-md my-2">Decotortas Website</h4>
          <p className="text-gray-800">
            Website for a small company dedicated to the sale of custom cakes.
            Made in Wordpres.
          </p>
          <Link
            href="https://fabioladecotortas.cl/"
            className="btn btn-primary"
          >
            Click here to visit website{" "}
          </Link>
        </div>
        <div className="md:w-[45%]">
          <img src={"/portfolio1.png"} className="w-auto h-auto rounded-s" />
        </div>
      </div>

      <div className="flex  my-4 flex-col-reverse justify-center gap-4 md:flex-row-reverse md:justify-around">
        <div className="flex flex-col gap-4 items-center md:w-[40%] md:items-start ">
          <h4 className="font-semibold font-md my-2">Decotortas Website</h4>
          <p className="text-gray-800">
            Website for a small company dedicated to the sale of custom cakes.
            Made in Wordpres.
          </p>
          <Link
            href="https://fabioladecotortas.cl/"
            className="btn btn-primary"
          >
            Click here to visit website{" "}
          </Link>
        </div>
        <div className="md:w-[45%]">
          <img src={"/portfolio1.png"} className="w-auto h-auto rounded-s" />
        </div>
      </div>
    </article>
  );
}
