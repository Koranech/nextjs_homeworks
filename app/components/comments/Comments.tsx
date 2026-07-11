import {IComment} from "@/app/models/IComment";
import {apiService} from "@/app/services/api.service";
import Comment from "@/app/components/comment/Comment";

const Comments = async () => {

    const comments: IComment[] = await apiService.getComments();

    return (
        <div>
            <h1>Comments</h1>
            <hr/>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default Comments;
