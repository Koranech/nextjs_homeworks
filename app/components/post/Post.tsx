import {FC} from "react";
import Link from "next/dist/client/link";
import {IPost} from "@/app/models/IPost";

type PostProps = {
    post: IPost
}

const Post: FC<PostProps> = ({post}) => {
    return (
        <>
            <p><Link href={`/posts/${post.id}`}>{post.id} - {post.title}</Link></p>
        </>
    );
};

export default Post;
