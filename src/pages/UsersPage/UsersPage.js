import {Link, Outlet} from 'react-router-dom';

const UsersPage = () => {
    const id = 5;
    const user = {name: 'Ussssr', age: 15};

    return (
        <div>
            UsersPage
            <Link to={id.toString()} state={user}><button>UserDetails</button></Link>
            <Outlet/>
        </div>
    );
};

export {UsersPage};