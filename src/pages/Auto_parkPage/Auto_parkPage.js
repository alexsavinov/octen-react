import {useEffect, useState} from "react";
import {NavLink, Outlet} from 'react-router-dom';

import css from './Auto_parkPage.module.css';

// import {Car} from '../../components';
import {Auto_park} from '../../components';
// import {carService} from "../../services/car.service";
import {auto_parkService} from "../../services/auto_park.service";
import FormAuto_park from "../../components/FormAuto_park/FormAuto_park";

const Auto_parkPage = () => {
    const [formError, setFormError] = useState(null);
    const [auto_park, setAuto_park] = useState([]);

    useEffect(() => {
        auto_parkService.getAll().then(value => setAuto_park([...value]))
    }, []);

    const createAutopark = (data) => {
        auto_parkService.create(data)
            .then(value => setAuto_park([...auto_park, value]))
            .catch(error => {setFormError(error.response.data)});
    }

    const deleteAutopark = (id) => {
        auto_parkService.deleteById(id).then(value => value)
        setAuto_park([...auto_park.filter(item => item.id !== id)]);
    }

    return (
        <div className={css.wrap}>
            <div className={css.left}>
                <h3>Auto park</h3>
                <ul>
                    <li>
                        {'POST localhost:8000/auto_parks/add/\<id\> добавить один автопарк'}
                        {/*<NavLink to={'/create'}>create</NavLink>*/}
                        <FormAuto_park createAutopark={createAutopark} errors={formError}/>
                    </li>
                    <li>{'GET localhost:8000/auto_parks/\<id\> достать один автопарк'}</li>
                    <li>{'DELETE localhost:8000/auto_parks/\<id\> удалить автопарк\n'}</li>
                </ul>
                {auto_park.map(auto_park => <Auto_park
                    key={auto_park.id}
                    auto_park={{...auto_park}}
                    deleteAutopark={deleteAutopark}
                    />)}
            </div>
            <div className={css.right}>
                <Outlet/>
            </div>
        </div>
    );
};

export {Auto_parkPage};