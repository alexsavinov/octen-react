import {NavLink} from 'react-router-dom';

import css from './Header.module.css';

const Header = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to='/cars'>Cars</NavLink>
                <NavLink to='/auto_parks'>Auto parks</NavLink>
            </div>
        </div>
    );
};

export {Header};