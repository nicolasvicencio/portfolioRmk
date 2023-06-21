import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="bg-gray-200 md:bg-white h-screen">
      <article className="mx-auto h-1/2 my-16 flex flex-col gap-6 shadow-md p-4 md:flex-row-reverse md:justify-around pt-4 md:container">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h2 className="text-center font-bold text-orange-500 md:w-[30%] md:text-start">
            About me
          </h2>

          <h3>Web-Mobile developer</h3>
          <p className="text-gray-700 text-center md:text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            dolorem nisi id, quisquam quam nobis illum distinctio molestiae, vel
            dignissimos voluptas excepturi assumenda nam deleniti temporibus
            quod. Illo, veniam. A.
          </p>
          <div>
            <button className="btn btn-primary w-10">Check out my CV!</button>
          </div>
        </div>
        <div>
          <img
            src="hero-image-home.jpg"
            alt="notebook-image"
            className="h-auto w-auto rounded-s"
          />
        </div>
      </article>
    </div>
  );
}
