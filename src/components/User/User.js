import {Link} from "react-router-dom";

import css from "./User.module.css";

const User = ({user}) => {
    const {id, name} = user;
    return (
        <div className={css.user}>
            <div>
                [{id}] {name}
            </div>
            <div>
                <Link to={id.toString()} state={user}>
                    <button>Details</button>
                </Link>
            </div>
        </div>
    );
};

export {User};
