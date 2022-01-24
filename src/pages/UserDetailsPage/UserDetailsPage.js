import {Link, Outlet, useLocation, useParams} from 'react-router-dom';
import {useEffect} from "react";

import css from './UserDetails.module.css';

const UserDetailsPage = () => {
    // const {}
    // const {id} = useParams();
    const {state: user} = useLocation();
    const {id, name, username, email, address, phone, website, company} = user;

    // console.log('const {id} = useParams();', id);
    // console.log('const {state:user} = useLocation();', user);

    useEffect(() => {

    }, [id]);

    return (
        <div className={css.userdetails}>
            <h3>User details</h3>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div className={css.block}>
                <b>Address</b>
                <div>street: {address.street}</div>
                <div>suite: {address.suite}</div>
                <div>city: {address.city}</div>
                <div>zipcode: {address.zipcode}</div>
                <div>geo: {address.geo.lat}. {address.geo.lng}</div>
            </div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <div className={css.block}>
                <b>Company</b>
                <div>name: {company.street}</div>
                <div>catchPhrase: {company.catchPhrase}</div>
                <div>bs: {company.bs}</div>
            </div>

            <Link to={'posts'} state={{...user}}>Posts</Link>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};