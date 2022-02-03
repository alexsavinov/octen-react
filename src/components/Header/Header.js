import {NavLink} from "react-router-dom";

import css from "./Header.module.css";

const Header = () => {
    return (
        <div className={css.header}>
            <NavLink className={css.item} to="/cars">Cars</NavLink>
            <NavLink className={css.item} to="/users">Users</NavLink>
            <NavLink className={css.item} to="/posts">Posts</NavLink>
            <NavLink className={css.item} to="/comments">Comments</NavLink>
        </div>
    );
};

export {Header};