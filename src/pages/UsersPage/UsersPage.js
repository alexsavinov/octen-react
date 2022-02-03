import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import css from './UsersPage.module.css';

import {User} from '../../components';
import {getAllUsers} from "../../store";

const UsersPage = () => {
    const {users, status, error} = useSelector(state => state['userReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    return (
        <div className={css.wrap}>
            <div className={css.left}>
                <h3>Users</h3>
                {status === 'loading' && <h1>Loading...</h1>}
                {error && <h1>{error}</h1>}
                {users && users.map(user => <User key={user.id} user={{...user}}/>)}
            </div>
        </div>
    );
};

export {UsersPage};