import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="w-screen h-auto bg-gray-900">
      <div className="flex flex-col">
        <h3 className="text-white text-lg">Social</h3>
        <div className="flex flex-col gap-2"></div>
      </div>
    </footer>
  );
}
