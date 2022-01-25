import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import css from "./UserPosts.module.css";

import {postService} from "../../services/post.service";

const UserPostsPage = () => {
    const {state: post} = useLocation();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getByUserId(post.id).then(value => setPosts(value))
    }, []);

    return (
        <div>
            <h3 className={css.header}>Posts</h3>
            <div>
                {posts.map(post =>
                    <div className={css.post} key={post.id}>
                        <div className={css.title}>
                            [{post.id}] {post.title}
                        </div>
                        <div className={css.body}>{post.body}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export {UserPostsPage};