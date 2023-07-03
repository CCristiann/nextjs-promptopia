"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import Profile from '../../../../components/Profile';

const userProfilePage = ( { params }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${params.id}/posts`);
            const data = await response.json();
      
            setPosts(data);
          };
      
          fetchPosts()
    }, [])

    return (
        <Profile
        name={`${params.username}'s`}
        desc={`Welcome to ${params.username} profile page`}
        posts={posts}
        />
    )
}

export default userProfilePage
