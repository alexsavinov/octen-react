import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import css from "./PostComments.module.css";

import {commentService} from "../../services/comment.service";

const PostsCommentsPage = () => {
    const {state: post} = useLocation();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getByPostId(post.id).then(value => setComments(value))
    }, []);

    return (
        <div>
            <h3 className={css.header}>Comments</h3>
            <div>
                {comments.map(comment =>
                    <div className={css.post} key={comment.id} >
                        <div className={css.title}>
                            [{comment.id}] {comment.name}
                        </div>
                        <div className={css.body}>
                            <div className={css.bodyEmail}>{comment.email}:</div>
                            <div className={css.bodyBody}>{comment.body}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export {PostsCommentsPage};