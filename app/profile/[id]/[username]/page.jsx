"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import Profile from '../../../../components/Profile';
import Loader from '../../../../components/Loader';

const UserProfilePage = ( { params }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${params.id}/posts`);
            const data = await response.json();
      
            setPosts(data);
          };
      
          fetchPosts()
    }, [params.id])

    if(posts.length === 0) return <Loader />
    return (
        <Profile
        name={`${params.username}'s`}
        desc={`Welcome to ${params.username} profile page`}
        posts={posts}
        userId={params.id}
        />
    )
}

export default UserProfilePage
