import './Users.css';
import User from "../User/User";

const Users = ({users}) => {
    return (
        <div className="users">
            <h3>Users</h3>
            {users.map(value => <User key={value.id} user={value}/>)}
        </div>
    );
};

export default Users;
