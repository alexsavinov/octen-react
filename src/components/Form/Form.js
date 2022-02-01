import {joiResolver} from "@hookform/resolvers/joi";
import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {createCar, updateCarById} from "../../store";
import {CarValidator} from "../../validators/car.validator";

const Form = () => {
    const {carForUpdate} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();
    const {handleSubmit, register, reset, setValue, formState: {errors}} = useForm({
        resolver: joiResolver(CarValidator),
        mode: "onTouched"
    });

    const submit = (data) => {
        if (carForUpdate) {
            dispatch(updateCarById({id: carForUpdate.id, car: data}));
        } else {
            dispatch(createCar({data}));
        }
        reset();
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, [carForUpdate]);

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label>Model: <input type="text" placeholder={'model'} {...register('model')}/></label>
                {errors.model && <span>{errors.model.message}</span>}
            </div>
            <div>
                <label>Price: <input type="text" placeholder={'price'} {...register('price')}/></label>
                {errors.price && <span>{errors.price.message}</span>}
            </div>
            <div>
                <label>Year: <input type="text" placeholder={'year'} {...register('year')}/></label>
                {errors.year && <span>{errors.year.message}</span>}
            </div>
            <button>Save</button>
        </form>
    );
};

export {Form};
