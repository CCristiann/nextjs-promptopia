"use client";

import React, { useEffect, useState } from "react";
import Profile from "../../components/Profile";
import { useSession } from "next-auth/react";

import { useRouter } from "next/navigation";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfilePage = () => {
  const deleteSuccess = () =>
    toast.success("Prompt deleted successfully!", {
      position: "bottom-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  const { data: session } = useSession();

  const router = useRouter();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setPosts(data);
    };

    if (session?.user.id) fetchPosts();
  }, []);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmedDelete = confirm(
      "Are you sure you want to delete this post?"
    );

    if (hasConfirmedDelete) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        deleteSuccess();

        const filteredPosts = posts.filter((p) => p._id !== post._id);

        setPosts(filteredPosts);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <Profile
      name="My"
      desc="Welcome to your profile page"
      posts={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default ProfilePage;
