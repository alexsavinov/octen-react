import {useReducer} from "react";

import css from "./Form.module.css";

import {Animals} from "..";

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            let animals = [...state.animals];
            animals.push({
                id: state.lastId,
                animalName: action.animal.animalName,
                animalType: action.animal.animalType
            });
            return {...state, animals: animals, lastId: state.lastId++};

        case 'delete':
            return {...state, animals: state.animals.filter(animal => animal.id !== action.id)};

        default:
            throw new Error('Unsupported action type!');
    }
}

const Form = () => {
    const [state, dispatch] = useReducer(reducer, {animals: [], lastId: 0});

    const handleSubmit = (e, {animalType}) => {
        e.preventDefault();

        return dispatch({
            type: 'add',
            animal: {
                animalType: animalType,
                animalName: e.target.form[animalType].value
            }
        });
    }

    const deleteAnimalById = (id) => {
        return dispatch({
            type: 'delete',
            id: id
        });
    }

    return (
        <div className={css.wrap}>
            <form className={css.form}>

                <label htmlFor="cat">
                    Add Cat:
                </label>
                <input type="text" name={'cat'}/>
                <button onClick={(e) => handleSubmit(e, {animalType: 'cat'})}>
                    Save
                </button>
                <span className={css.or}>or</span>

                <label htmlFor="dog">
                    Add Dog:
                </label>
                <input type="text" name={'dog'}/>
                <button onClick={(e) => handleSubmit(e, {animalType: 'dog'})}>
                    Save
                </button>

            </form>

            <div className={css.animals}>
                <Animals state={state} deleteAnimalById={deleteAnimalById}/>
            </div>
        </div>
    );
};

export {Form};