import React from "react";
import PromptCard from "./PromptCard";
import { ToastContainer } from "react-toastify";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

const Profile = ({
  name,
  desc,
  posts,
  handleTagClick,
  handleDelete,
  handleEdit,
  userId
}) => {
  const { data: session } = useSession();
  const router = useRouter();

  if(session?.user.id === userId) {
    name = "My"
    desc= "Welcome to your profile page"
  }

  if(session?.user.id || userId){
    return(
      <>
      <section className="w-full">  
      <div className="flex flex-col gap-4">
        <h1 className="profile_text">{name} Profile</h1>
        <p className="description">{desc}</p>
      </div>

      {posts.length == 0 ? (
        <div className="w-full py-16">
          <h5 className="mt-5 text-gray-900 font-medium text-2xl md:text-3xl max-w-2xl">
            Create a post to see your personal posts in this section!
          </h5>
        </div>
      ) : (
        <div className="prompt_layout">
          {posts.map((post) => (
            <PromptCard
              key={post._id}
              post={post}
              handleTagClick={handleTagClick}
              handleDelete={() => handleDelete && handleDelete(post)}
              handleEdit={() => handleEdit && handleEdit(post)}
            />
          ))}
        </div>
      )}

      <ToastContainer />

    </section>
      </>
    )
  }else{
    router.push('/');
  }
  
};

export default Profile;
