import {apiService} from "@/app/services/api.service";
import Post from "@/app/components/post/Post";
import {IPost} from "@/app/models/IPost";

const Posts = async () => {

    const posts: IPost[] = await apiService.getPosts()
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
