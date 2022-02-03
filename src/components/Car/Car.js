import {useDispatch} from "react-redux";

import css from "./Car.module.css";

import {carActions, deleteCarById} from "../../store";

const Car = ({car}) => {
    const {id, model, price, year} = car;
    const {carToUpdate} = carActions;
    const dispatch = useDispatch();
    return (
        <div className={css.car}>
            <div className={css.title}>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <div className={css.buttons}>
                <button onClick={() => dispatch(carToUpdate({id, car}))}>Edit</button>
                <button onClick={() => dispatch(deleteCarById({id}))}>Delete</button>
            </div>
        </div>
    );
};

export {Car};
