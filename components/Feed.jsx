"use client";

import React, { useEffect, useState } from "react";
import PromptCard from "../components/PromptCard";

const PromptsList = ({ data, handleTagClick, searchValue }) => {
  const searchResults = data.filter(
    (post) =>
      post.creator.username.toLowerCase().includes(searchValue) ||
      post.tag.toLowerCase().includes(searchValue)
  );

  return (
    <>
      {searchResults.length > 0 ? (
        <div className="prompt_layout">
          {searchResults.map((post) => (
            <PromptCard
              key={post._id}
              post={post}
              handleTagClick={handleTagClick}
              handleEdit={() => {}}
              handleDelete={() => {}}
            />
          ))}
        </div>
      ) : (
        <div className="w-full py-16">
          <h5 className="mt-5 text-gray-900 font-medium text-2xl md:text-3xl max-w-2xl">
            No prompts found, try changing your search value.
          </h5>
        </div>
      )}
    </>
  );
};

const Feed = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      setPosts(data);
    };

    fetchPosts();
  }, []);
  return (
    <section className="mt-12 mx-auto w-full max-w-xl flex justify-center items-center flex-col gap-6">
      <form className="relative w-full">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          onChange={handleSearchChange}
          required
          className="search_input"
        />
      </form>

      <PromptsList
        data={posts}
        handleTagClick={() => {}}
        searchValue={search}
      />
    </section>
  );
};

export default Feed;
