import {useEffect, useState} from "react";
import {Outlet} from 'react-router-dom';

import css from './Posts.module.css';

import {Post} from '../../components';
import {postService} from "../../services/post.service";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, []);

    return (
        <div className={css.wrap}>
            <div className={css.left}>
                <h3>Posts</h3>
                {posts.map(post => <Post key={post.id} post={{...post}}/>)}
            </div>
            <div className={css.right}>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostsPage};