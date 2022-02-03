import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import css from './PostsPage.module.css';

import {Post} from '../../components';
import {getAllPosts} from "../../store";

const PostsPage = () => {
    const {posts, status, error} = useSelector(state => state['postReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
    }, []);

    return (
        <div className={css.wrap}>
            <div className={css.left}>
                <h3>Posts</h3>
                {status === 'loading' && <h1>Loading...</h1>}
                {error && <h1>{error}</h1>}
                {posts && posts.map(post => <Post key={post.id} post={{...post}}/>)}
            </div>
        </div>
    );
};

export {PostsPage};