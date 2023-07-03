import React from "react";
import Link from "next/link";

const Form = ({ type, post, setPost, submitForm, handleSubmit }) => {
  return (
    <section className="w-full h-[80vh] flex flex-col justify-center gap-6">
      <h1 className="text-5xl md:text-6xl font-bold">
        <span className="black-blue_gradient">{type} Post</span>
      </h1>
      <p className="description text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        className="p-4 rounded-lg mt-10 w-full max-w-2xl flex flex-col gap-7 bg-gray-100"
        onSubmit={handleSubmit}
      >
        <label>
          <span className="font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
          <textarea
            className="form_textarea"
            placeholder="Write here your prompt"
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
          />
        </label>

        <label>
          <span className="font-semibold text-base text-gray-700">
            Tag
            <span className="font-normal">
              (#product, #webdevelopment, #idea)
            </span>
          </span>
          <input
            type="text"
            className="form_input"
            placeholder="#whateveryouwant"
            required
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
          />
        </label>

        <div className="flex gap-4">
          <Link className="black_btn" href="/">
            Cancel
          </Link>
          <button className="orange_btn" type="submit" disabled={submitForm}>
            {submitForm ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
