import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import css from "./CarsPage.module.css";

import {Car, Form} from "../../components";
import {getAllCars} from "../../store";

const CarsPage = () => {
    const {cars, status, error} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars())
    }, []);

    return (
        <div className={css.wrap}>
            <Form/>
            <div className={css.cars}>
                {status === 'loading' && <h1>Loading...</h1>}
                {error && <h1>{error}</h1>}
                {cars && cars.map(car => <Car key={car.id} car={{...car}}/>)}
            </div>
        </div>
    );
};

export {CarsPage};
