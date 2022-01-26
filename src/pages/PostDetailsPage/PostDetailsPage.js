import {Link, Outlet, useLocation} from "react-router-dom";

import css from "./PostDetails.module.css";

const PostDetailsPage = () => {
    const {state: post} = useLocation();
    const {id, title, body} = post;

    return (
        <div>
            <div className={css.post} key={id}>
                <h3>Post</h3>
                <div className={css.title}>
                    [{id}] {title}
                </div>
                <div className={css.body}>
                    {body}
                </div>
                <div>
                    <Link to={"comments"} state={{...post}}>
                        <button>Comments</button>
                    </Link>
                </div>
            </div>
            <Outlet/>
        </div>
    );
};

export {PostDetailsPage};