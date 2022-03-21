import React, {useEffect, useState} from "react";
import {NavLink, Outlet, useParams} from 'react-router-dom';

import css from './CarsPage.module.css';

import {Car} from '../../components';
import {carService, auto_parkService} from "../../services";
import {FormCar} from '../../components';

const CarsPage = () => {
    const [cars, setCars] = useState([]);
    const [auto_park, setAuto_park] = useState([]);
    const [formError, setFormError] = useState(null);

    let {autoParkId} = useParams();

    useEffect(() => {
        if (!autoParkId) {
            carService.getAll().then(value => setCars([...value]))
        } else {
            carService.getByParkId(autoParkId).then(value => setCars([...value]))
        }

    }, [autoParkId]);

    useEffect(() => {
        auto_parkService.getAll().then(value => setAuto_park([...value]))
    }, []);

    const createCar = (data) => {
        if (autoParkId) {
            auto_parkService.createCarByParkId(autoParkId, data)
                .then(value =>setCars([...cars, value]))
                .catch(error => {setFormError(error.response.data)}
            );
        } else {
            alert('В начале выполните поиск машин по id автопарка')
        }
    }

    const deleteCar = (id) => {
        carService.deleteById(id).then(value => value)
        setCars([...cars.filter(item => item.id !== id)]);
    }

    return (
        <div className={css.wrap}>
            <div className={css.left}>
                <h3>Cars</h3>
                <ul>
                    <li>{'GET localhost:8000/cars?autoParkId=1 // поиск машин по id автопарка:'}
                        <div>
                            {auto_park.map(auto_park =>
                                <div>
                                    <NavLink to={`/cars/${auto_park.id}`} key={auto_park.id}>
                                        [autoParkId = {auto_park.id}]
                                    </NavLink>
                                </div>)}
                        </div>
                    </li>
                    <li>{'POST localhost:8000/auto_parks/<autopark_id>/cars  // добавление машины по id автопарка:'}
                        <FormCar createCar={createCar} errors={formError}/>
                    </li>
                </ul>
                {cars.map(car => <Car key={car.id} car={{...car}} deleteCar={deleteCar}/>)}
            </div>
            <div className={css.right}>
                <Outlet/>
            </div>
        </div>
    );
};

export {CarsPage};