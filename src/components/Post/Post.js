import {Link} from "react-router-dom";

import css from "./Post.module.css";

const Post = ({post}) => {
    const {id, title} = post;

    return (
        <div className={css.post}>
            <div>
                [{id}] {title}
            </div>
            <div>
                <Link to={id.toString()} state={{...post}}>
                    <button>Details</button>
                </Link>
            </div>
        </div>
    );
};

export {Post};
