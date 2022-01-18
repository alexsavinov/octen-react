import {useEffect, useState} from "react";

import User from "../User/User";
import './Users.css';
import {userService} from "../../services/user.service";


const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value))
    }, [])

    return (
        <div className="users">
            <h3>Users</h3>
            {users.map(value => <User key={value.id} id={value.id} name={value.name} username={value.username}
                                      email={value.email} street={value.address.street}/>)}
        </div>
    );
};

export default Users;
