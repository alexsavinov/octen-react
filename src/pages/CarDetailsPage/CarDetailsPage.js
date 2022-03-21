import {Link, Outlet, useLocation} from 'react-router-dom';

import css from './CarDetails.module.css';

const CarDetailsPage = () => {
    const {state: car} = useLocation();
    const {id, brand, price, year} = car;

    return (
        <div>
            <h3>Car details</h3>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            {/*<div className={css.block}>*/}
            {/*    <b>Address</b>*/}
            {/*    <div>street: {address.street}</div>*/}
            {/*    <div>suite: {address.suite}</div>*/}
            {/*    <div>city: {address.city}</div>*/}
            {/*    <div>zipcode: {address.zipcode}</div>*/}
            {/*    <div>geo: {address.geo.lat}, {address.geo.lng}</div>*/}
            {/*</div>*/}
            {/*<div>phone: {phone}</div>*/}
            {/*<div>website: {website}</div>*/}
            {/*<div className={css.block}>*/}
            {/*    <b>Company</b>*/}
            {/*    <div>name: {company.street}</div>*/}
            {/*    <div>catchPhrase: {company.catchPhrase}</div>*/}
            {/*    <div>bs: {company.bs}</div>*/}
            {/*</div>*/}

            {/*<Link to={'posts'} state={{...user}}>*/}
            {/*    <button>Posts</button>*/}
            {/*</Link>*/}

            <Outlet/>
        </div>
    );
};

export {CarDetailsPage};