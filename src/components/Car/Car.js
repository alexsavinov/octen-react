import {useDispatch} from "react-redux";
import {carActions, deleteCarById} from "../../store";

const Car = ({car}) => {
    const {id, model, price, year} = car;
    const {carToUpdate} = carActions;
    const dispatch = useDispatch();
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px', gap: '20px'}}>
            <div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={() => dispatch(carToUpdate({id, car}))}>Edit</button>
            <button onClick={() => dispatch(deleteCarById({id}))}>Delete</button>
        </div>
    );
};

export {Car};
