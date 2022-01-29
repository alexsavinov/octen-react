import {useDispatch} from "react-redux";
import {carActions, deleteCarThunk} from "../../store";

const Car = ({car: {id, model, price, year}}) => {
    const dispatch = useDispatch();
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px', gap: '20px'}}>
            <div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={()=>dispatch(deleteCarThunk({id}))}>Delete</button>
        </div>
    );
};

export {Car};
