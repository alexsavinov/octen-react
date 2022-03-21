import {Link} from 'react-router-dom';

import css from './Car.module.css';

const Car = ({car, deleteCar}) => {
    const {id, brand} = car;

    const deleteCarAction = () => {
        deleteCar(id);
    }

    return (
        <div className={css.user}>
            <div>
                [{id}] {brand}
            </div>
            <div>
                <button onClick={deleteCarAction}>Delete</button>
                <Link to={'details/' + id.toString()} state={{...car}}>
                    <button>Details</button>
                </Link>
            </div>
        </div>
    );
};

export {Car};
