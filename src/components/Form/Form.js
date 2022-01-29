import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {carActions, createCar} from "../../store";

const Form = () => {
    const {handleSubmit, register, reset} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(createCar({id:44,data}))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>Model: <input type="text" {...register('model')}/></label>
            <label>Price: <input type="text" {...register('price')}/></label>
            <label>Year: <input type="text" {...register('year')}/></label>
            <button>Save</button>
        </form>
    );
};

export {Form};
