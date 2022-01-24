import {Link, Outlet} from 'react-router-dom';
import {useEffect, useState} from "react";

import {userService} from "../../services/user.service";
import User from '../../components/User/User';
import css from './UsersPage.module.css';

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value))
    }, [])

    return (
        <div className={css.wrap}>
            <div className={css.left}>
                <h3>Users</h3>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <div className={css.right}>
                <Outlet/>
            </div>
        </div>
    );
};

export {UsersPage};