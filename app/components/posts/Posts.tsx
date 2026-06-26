"use client"
import {useEffect, useState} from "react";
import {IPost} from "@/app/models/IPost";
import {apiService} from "@/app/services/api.service";
import Post from "@/app/components/post/Post";

const Posts = () => {

    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        apiService.getPosts()
            .then(posts => setPosts(posts))
    }, []);
    return (
        <div>
            <h1>Posts</h1>
            <hr/>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Posts;
