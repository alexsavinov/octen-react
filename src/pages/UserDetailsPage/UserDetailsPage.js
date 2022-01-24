import {Link, Outlet, useLocation, useParams} from 'react-router-dom';
import {useEffect} from "react";

const UserDetailsPage = () => {
    // const {}
    const {id} = useParams();
    const {state:user} = useLocation();
    console.log('const {id} = useParams();', id);
    console.log('const {state:user} = useLocation();', user);

    useEffect(() => {

    }, [id]);

    return (
        <div>
            UserDetailsPage
            <Link to={'posts'} state={{...user}}>LinkToPosts</Link>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};