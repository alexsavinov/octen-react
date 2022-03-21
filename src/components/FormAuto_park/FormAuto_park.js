import {useForm} from "react-hook-form";

const FormAuto_park = ({createAutopark, errors}) => {
    const {register, handleSubmit} = useForm();

    return (
        <div>
            <form onSubmit={handleSubmit(createAutopark)}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <label>Name: <input type="text" defaultValue={''} {...register('name')}/></label>
                    {errors && errors.name && <div>{errors.name[0]}</div>}
                </div>
                <button>Save</button>
            </form>
        </div>
    );
};

export {FormAuto_park};