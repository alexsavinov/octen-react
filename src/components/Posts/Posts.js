import './Posts.css';
import Post from "../Post/Post";

const Posts = ({posts}) => {
    return (
        <div className="posts">
            <h3>Posts</h3>
            {posts.map(value => <Post
                key={value.id}
                id={value.id}
                userId={value.userId}
                title={value.title}
                body={value.body}
            />)}
        </div>
    );
};

export default Posts;
