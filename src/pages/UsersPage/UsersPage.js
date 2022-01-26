import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import css from "./UsersPage.module.css";

import {User} from "../../components";
import {userService} from "../../services/user.service";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]))
    }, []);

    return (
        <div className={css.wrap}>
            <div className={css.left}>
                <h3>Users</h3>
                {users.map(user => <User key={user.id} user={{...user}}/>)}
            </div>
            <div className={css.right}>
                <Outlet/>
            </div>
        </div>
    );
};

export {UsersPage};