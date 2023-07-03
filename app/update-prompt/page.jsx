"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "../../components/Form";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdatePrompt = () => {
  const updateSuccess = () =>
    toast.success("Prompt updated successfully!", {
      position: "bottom-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  const updateError = () => toast.error("An error occured :(");

  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");

  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  useEffect(() => {
    const getPromptData = async () => {
      const res = await fetch(`/api/prompt/${promptId}`);
      const data = await res.json();

      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };

    if (promptId) getPromptData();
  }, [promptId]);
  const [submitForm, setSubmitForm] = useState(false);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setSubmitForm(true);

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        updateSuccess();
        router.push("/");
      } else {
        updateError();
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
        type="Edit"
        post={post}
        setPost={setPost}
        submitForm={submitForm}
        handleSubmit={updatePrompt}
      />
    </>
  );
};

export default UpdatePrompt;
