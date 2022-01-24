import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    // {
    // "userId": 10,
    // "id": 92,
    // "title": "ratione ex tenetur perferendis",
    // "body": "aut et excepturi dicta laudantium sint rerum nihil\nlaudantium et at\na neque minima officia et similique libero et\ncommodi voluptate qui"
    // }
    return (
        <div>
            <Link to={id.toString()} state={post}>
                [{id}] {title}
                <Link to={id.toString()} state={post}>
                    <button>PostDetails</button>
                </Link>
            </Link>
        </div>
    );
};

export default Post;
