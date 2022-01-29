import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import {useEffect} from "react";
import {getAllCars} from "../../store";

const Cars = () => {
    const {cars, status, error} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars())
    }, [])

    return (
        <div style={{margin: '50px'}}>
            {status==='loading' && <h1>Loading...</h1>}
            {error&&<h1>{error}</h1>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};
