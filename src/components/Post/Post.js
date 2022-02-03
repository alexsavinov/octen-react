import css from "./Post.module.css";

const Post = ({post}) => {
    const {id, title} = post;

    return (
        <div className={css.post}>
            <div>
                [{id}] {title}
            </div>
        </div>
    );
};

export {Post};
