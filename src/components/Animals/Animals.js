import css from "./Animals.module.css";

import {Animal} from "../";

const Animals = ({state: {animals}, deleteAnimalById}) => {
    return (
        <div className={css.wrap}>
            <div className={css.animals}>
                {animals.map(animal => animal.animalType === "cat" &&
                    <Animal key={animal.id} animal={animal} deleteAnimalById={deleteAnimalById}/>)}
            </div>
            <div className={css.animals}>
                {animals.map(animal => animal.animalType === "dog" &&
                    <Animal key={animal.id} animal={animal} deleteAnimalById={deleteAnimalById}/>)}
            </div>
        </div>
    );
};

export {Animals};