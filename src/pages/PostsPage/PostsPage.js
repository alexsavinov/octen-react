import {Link, Outlet} from 'react-router-dom';
import {useEffect, useState} from "react";

import Post from '../../components/Post/Post';
import css from './PostsPage.module.css';
import {postService} from "../../services/post.service";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts(value))
    }, []);

    return (
        <div className={css.wrap}>
            <div className={css.left}>
                <h3>Posts</h3>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
            <div className={css.right}>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostsPage};