import Link from "next/link";
import React from "react";

type Props = {};

export default function Web({}: Props) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 my-40 justify-center gap-8">
        <article className="p-10 rounded-md shadow-lg">
          <img src="/portfolio-web-2.png" alt="" />
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
        <article className="p-10 rounded-md shadow-lg">
          <img src="/portfolio-web-1.png" alt="" />
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-subtitle text-2xl font-semibold">Keep Blog</h3>
            <p className="text-content text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              blanditiis iusto possimus ipsa distinctio. Natus velit nesciunt
              provident maxime deleniti?
            </p>
            <Link href="/" className="btn btn-primary">
              d View Details
            </Link>
          </div>
        </article>
        <article className="p-10 rounded-md shadow-lg">
          <img src="/portfolio-web-2.png" alt="" />
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
        <article className="p-10 rounded-md shadow-lg">
          <img src="/portfolio-web-2.png" alt="" />
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
      </div>
    </>
  );
}
