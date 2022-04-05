import {useParams} from 'react-router-dom';
import {useEffect} from 'react';

import {authService} from '../../services';

const Activate = () => {
    const {activateToken} = useParams();

    useEffect(() => {
        authService.activateUser(activateToken).then((value) => value)
    }, [activateToken]);

    return (
        <div className={'mt-5 ms-2'}>
            <h2>User activated!</h2>
        </div>
    );
};

export {Activate};
