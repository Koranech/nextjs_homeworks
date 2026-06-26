import {IComment} from "@/app/models/IComment";
import {FC} from "react";
import Link from "next/dist/client/link";

type CommentProps = {
    comment: IComment;
}

const Comment:FC<CommentProps> = ({comment}) => {
    return (
        <>
            <p><Link href={`/comments/${comment.id}`}>{comment.id} - {comment.name}</Link></p>
        </>
    );
};

export default Comment;
