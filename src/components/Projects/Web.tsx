import Link from "next/link";
import React from "react";

type Props = {};

export default function Web({}: Props) {
  return (
    <>
      <article className="p-10 items-center flex-col gap-4 rounded-md flex md:flex-row md:gap-4 md:items-center">
        <img src="/portfolio-web-2.png" alt="" className="w-full md:w-[45%]" />
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-subtitle text-2xl font-semibold">Keep Blog</h3>
          <p className="text-content text-center">
            Keep blog es un sitio web en donde comparto lo que voy aprendiendo,
            nuevas tecnologias, librerias utiles y diferentes puntos de vista.
            Desarrollado con nextjs y markdown files
          </p>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://keep-blog.vercel.app"
            className="btn btn-primary"
          >
            View Details
          </Link>
        </div>
      </article>
      <article className="p-10 items-center flex-col gap-4 rounded-md flex md:flex-row md:gap-4 md:items-center">
        <img src="/portfolio-web-3.png" alt="" className="w-full md:w-[45%]" />
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-subtitle text-2xl font-semibold">Dialectica</h3>
          <p className="text-content text-center">
            Dialectica is focused on language learners, offering the possibility
            to practice their language skills together with chatGP as a
            conversation partner. Developed with nextjs, supabase and zustand.
          </p>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://dialectica.vercel.app"
            className="btn btn-primary"
          >
            View Details
          </Link>
        </div>
      </article>
      <article className="p-10 items-center flex-col gap-4 rounded-md flex md:flex-row md:gap-4 md:items-center">
        <img src="/portfolio-web-1.png" alt="" className="w-full md:w-[45%]" />
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-subtitle text-2xl font-semibold">
            Fabiola Decotortas
          </h3>
          <p className="text-content text-center">
            Website for a small company dedicated to the sale of custom cakes.
            Made in Wordpres.
          </p>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://fabioladecotortas.cl"
            className="btn btn-primary"
          >
            View Details
          </Link>
        </div>
      </article>
      <article className="p-10 items-center flex-col gap-4 rounded-md flex md:flex-row md:gap-4 md:items-center">
        <img src="/portfolio-web-4.png" alt="" className="w-full md:w-[45%]" />
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-subtitle text-2xl font-semibold">Gym front</h3>
          <p className="text-content text-center">
            Design mockup for website of a gym that sells supplements, exercise
            routines and diets Developed in Nextjs and Tailwindcss
          </p>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="/"
            className="btn btn-primary"
          >
            View Details
          </Link>
        </div>
      </article>
    </>
  );
}
