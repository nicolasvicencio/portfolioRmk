"use client";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { z } from "zod";

type Props = {};

export default function Contact({}: Props) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const emailSchema = z.coerce.string().email();
    const nameSchema = z.coerce.string();
    const messageSchema = z.coerce.string();

    nameSchema.safeParse(name);
    emailSchema.parse(email);
    messageSchema.parse(message);
  }
  return (
    <article className="h-screen md:w-[50%] mx-auto mt-40" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="title">Contact</h1>
        <span className="subline"> </span>
      </div>
      <div className="bg-white p-4 rounded-s shadow-md w-full md:px-10">
        <form onSubmit={handleSubmit} className="flex flex-col ">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Your Name"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="email"
            placeholder="Your Name"
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="flex justify-center md:justify-end my-4">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </article>
  );
}
