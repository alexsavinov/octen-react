import {useForm} from "react-hook-form";

const FormCar = ({createCar, errors}) => {
    const {register, handleSubmit} = useForm();

    return (
        <div>
            <form onSubmit={handleSubmit(createCar)}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <label>Brand: <input type="text" defaultValue={''} {...register('brand')}/></label>
                    {errors && errors.brand && <div>{errors.brand[0]}</div>}
                    <label>Price: <input type="number" defaultValue={0} {...register('price')}/></label>
                    {errors && errors.price && <div>{errors.price[0]}</div>}
                    <label>Year: <input type="number" defaultValue={0} {...register('year')}/></label>
                    {errors && errors.year && <div>{errors.year[0]}</div>}
                </div>
                <button>Save</button>
            </form>
        </div>
    );
};

export {FormCar};