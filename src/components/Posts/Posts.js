import {useEffect, useState} from "react";

import Post from "../Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    }, [])

    return (
        <div>
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
