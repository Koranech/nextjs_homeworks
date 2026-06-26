import type {Metadata} from 'next';
import {FC} from "react";
import {apiService} from "@/app/services/api.service";
import {IPost} from "@/app/models/IPost";
import Post from "@/app/components/post/Post";

type Props = {
    params: { id: string };
};

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params
    return {
        title: `Post ${id} page title`
    }
}

const PostPage: FC<Props> = async ({params}) => {
    const {id} = await params

    const post: IPost = await apiService.getPostById(id)

    return (
        <div>
            {post.id && <Post key={id} post={post}/>}
            {!post.id && <div><h1>Wrong number (must be 1-100)</h1></div>}

        </div>
    );
};

export default PostPage;
