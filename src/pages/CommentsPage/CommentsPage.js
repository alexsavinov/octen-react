import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import css from "./CommentsPage.module.css";

import {getAllComments} from "../../store";

const CommentsPage = () => {
    const {comments, status, error} = useSelector(state => state['commentReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments());
    }, []);

    return (
        <div className={css.wrap}>
            <div className={css.comments}>
                <h3 className={css.header}>Comments</h3>
                {status === 'loading' && <h1>Loading...</h1>}
                {error && <h1>{error}</h1>}
                {comments.map(comment =>
                    <div className={css.post} key={comment.id}>
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

export {CommentsPage};
