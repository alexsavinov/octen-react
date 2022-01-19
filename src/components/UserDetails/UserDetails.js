import React from 'react';

import "./UserDetails.css";


const UserDetails = ({user, getUserId}) => {
    const {id, name, username, email, address} = user;

    return (
        <div className="userdetails">
            <h3>User details</h3>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>street: {address.street}</div>
            <button onClick={() => getUserId(id)}>Posts</button>
        </div>);
};

export default UserDetails;