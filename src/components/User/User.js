import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name} = user;
    return (
        <div>
            <Link to={id.toString()} state={user}>
                [{id}] {name}
                <Link to={id.toString()} state={user}>
                    <button>Details</button>
                </Link>
            </Link>
        </div>
    );
};

export default User;
