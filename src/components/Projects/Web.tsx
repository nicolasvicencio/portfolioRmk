import Link from "next/link";
import React from "react";

type Props = {};

export default function Web({}: Props) {
  return (
    <>
      <article className="p-10 rounded-md flex md:flex-row md:gap-4 md:items-center">
        <img src="/portfolio-web-2.png" alt="" className="w-[45%]" />
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-subtitle text-2xl font-semibold">Keep Blog</h3>
          <p className="text-content text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            blanditiis iusto possimus ipsa distinctio. Natus velit nesciunt
            provident maxime deleniti?
          </p>
          <Link href="/" className="btn btn-primary">
            View Details
          </Link>
        </div>
      </article>
      <article className="p-10 rounded-md flex md:flex-row-reverse md:gap-4 md:items-center">
        <img src="/portfolio-web-1.png" alt="" className="w-[45%]" />
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-subtitle text-2xl font-semibold">
            Fabiola Decotortas
          </h3>
          <p className="text-content text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            blanditiis iusto possimus ipsa distinctio. Natus velit nesciunt
            provident maxime deleniti?
          </p>
          <Link href="/" className="btn btn-primary">
            View Details
          </Link>
        </div>
      </article>
      <article className="p-10 rounded-md flex md:flex-row md:gap-4 md:items-center">
        <img src="/portfolio-web-3.png" alt="" className="w-[45%]" />
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-subtitle text-2xl font-semibold">Dialectica</h3>
          <p className="text-content text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            blanditiis iusto possimus ipsa distinctio. Natus velit nesciunt
            provident maxime deleniti?
          </p>
          <Link href="/" className="btn btn-primary">
            View Details
          </Link>
        </div>
      </article>
      <article className="p-10 rounded-md flex md:flex-row-reverse md:gap-4 md:items-center">
        <img src="/portfolio-web-4.png" alt="" className="w-[45%]" />
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-subtitle text-2xl font-semibold">Ecommerce</h3>
          <p className="text-content text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            blanditiis iusto possimus ipsa distinctio. Natus velit nesciunt
            provident maxime deleniti?
          </p>
          <Link href="/" className="btn btn-primary">
            View Details
          </Link>
        </div>
      </article>
    </>
  );
}
