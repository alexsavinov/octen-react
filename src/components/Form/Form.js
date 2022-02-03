import {joiResolver} from "@hookform/resolvers/joi";
import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import css from "./Form.module.css";

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
        <div className={css.wrap}>
            <form className={css.form} onSubmit={handleSubmit(submit)}>
                <h3>Cars</h3>
                <div className={css.input}>
                    <label className={css.label}>Model:</label>
                    <input type="text" placeholder={'model'} {...register('model')}/>
                    {errors.model && <span>{errors.model.message}</span>}
                </div>
                <div className={css.input}>
                    <label className={css.label}>Price:</label>
                    <input type="text" placeholder={'price'} {...register('price')}/>
                    {errors.price && <span>{errors.price.message}</span>}
                </div>
                <div className={css.input}>
                    <label className={css.label}>Year:</label>
                    <input type="text" placeholder={'year'} {...register('year')}/>
                    {errors.year && <span>{errors.year.message}</span>}
                </div>
                <button>Save</button>
            </form>
        </div>
    );
};

export {Form};
