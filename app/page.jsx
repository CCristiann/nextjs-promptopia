import React from "react";

import Feed from "../components/Feed";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <section className="w-full flex flex-col gap-10 justify-center items-center">
      <h1 className="hero_text">
        Discover & Share
        <br />
        <span className="">AI-Powered Prompts</span>
      </h1>

      <p className="description text-center">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>

      <Feed />
      <ToastContainer />
    </section>
  );
}
