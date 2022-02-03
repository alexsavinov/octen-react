import css from "./User.module.css";

const User = ({user}) => {
    const {id, name, email} = user;
    return (
        <div className={css.user}>
            <div>
                [{id}] {name}
            </div>
            <div>email: {email}</div>
        </div>
    );
};

export {User};
