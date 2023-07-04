"use client";
import React, { useState } from "react";
type Props = {};

export default function Contact({}: Props) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <section className="bg-gray-100">
      <article
        className="h-screen md:w-[50%] mx-auto mt-40 flex flex-col justify-center"
        id="contact"
      >
        <div className="flex flex-col items-center">
          <h1 className="title">Contact</h1>
          <span className="subline"> </span>
        </div>
        <div className="bg-white p-4 rounded-s shadow-xl w-full md:px-10">
          <form
            action="https://formsubmit.co/nicolas.vicencio.or@gmail.com"
            method="POST"
            className="flex flex-col "
          >
            <label htmlFor="name">Name</label>
            <input
              required
              type="text"
              name="name"
              id="name"
              pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
              value={name}
              placeholder="Insert your name"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              required
              type="text"
              name="email"
              id="email"
              pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
              value={email}
              placeholder="Insert your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="message">Message</label>
            <textarea
              required
              name="message"
              id="message"
              value={message}
              rows={5}
              placeholder="Insert your message"
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
    </section>
  );
}
