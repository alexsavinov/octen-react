import React from 'react';

import "./UserDetails.css";

const UserDetails = ({user, getUserId}) => {
    const {id, name, username, email, address, phone, website, company} = user;

    return (
        <div className="userdetails">
            <h3>User details</h3>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div className="block">
                <b>Address</b>
                <div>street: {address.street}</div>
                <div>suite: {address.suite}</div>
                <div>city: {address.city}</div>
                <div>zipcode: {address.zipcode}</div>
                <div>geo: {address.geo.lat}. {address.geo.lng}</div>
            </div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <div className="block">
                <b>Company</b>
                <div>name: {company.street}</div>
                <div>catchPhrase: {company.catchPhrase}</div>
                <div>bs: {company.bs}</div>
            </div>
            <button onClick={() => getUserId(id)}>Posts</button>
        </div>);
};

export default UserDetails;