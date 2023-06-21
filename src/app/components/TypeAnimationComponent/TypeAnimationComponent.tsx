"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
type Props = {};

export default function TypeAnimationComponent({}: Props) {
  return (
    <TypeAnimation
      sequence={[
        "() => console.log()",
        1000,
        "() => throw Error()",
        1000,
        "() => build.page()",
        1000,
        "Nico.dev_",
      ]}
      wrapper="h2"
      style={{ fontSize: "1rem", fontWeight: "bold" }}
    />
  );
}
