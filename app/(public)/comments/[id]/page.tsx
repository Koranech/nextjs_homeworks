import type {Metadata} from 'next';
import {FC} from "react";
import {apiService} from "@/app/services/api.service";
import {IComment} from "@/app/models/IComment";
import Comment from "@/app/components/comment/Comment";

type Props = {
    params: { id: string };
};

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params
    return {
        title: `Post ${id} page title`
    }
}

const CommentPage: FC<Props> = async ({params}) => {
    const {id} = await params

    const comment: IComment = await apiService.getCommentById(id)

    return (
        <div>
            {comment.id && <Comment key={id} comment={comment}/>}
            {!comment.id && <div><h1>Wrong number (must be 1-500)</h1></div>}

        </div>
    );
};

export default CommentPage;
