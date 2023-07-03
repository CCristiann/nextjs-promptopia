"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "../../components/Form";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreatePrompt = () => {
  const createSuccess = () =>
    toast.success("Prompt created successfully!", {
      position: "bottom-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  const createError = () => toast.error("An error occured :(");

  const { data: session } = useSession();

  const router = useRouter();

  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const [submitForm, setSubmitForm] = useState(false);

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitForm(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        createSuccess();
        router.push("/");
      } else {
        createError();
      }
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitForm(false);
    }
  };

  return (
    <>
      <Form
        type="Create"
        post={post}
        setPost={setPost}
        submitForm={submitForm}
        handleSubmit={createPrompt}
      />
    </>
  );
};

export default CreatePrompt;
