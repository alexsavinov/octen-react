import {useEffect, useState} from "react";

import './Users.css';
import User from "../User/User";
import {userService} from "../../services/user.service";


const Users = ({getUser}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value))
    }, []);

    return (
        <div className="users">
            <h3>Users</h3>
            {users.map(value => <User key={value.id} user={value} getUser={getUser}/>)}
        </div>
    );
};

export default Users;
