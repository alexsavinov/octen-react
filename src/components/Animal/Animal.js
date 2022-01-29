import css from "./Animal.module.css";

const Animal = ({animal, deleteAnimalById}) => {
    return (
        <div className={css.animal}>
            <div>
                {animal.animalName}
            </div>
            <div>
                <button onClick={() => deleteAnimalById(animal.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export {Animal};