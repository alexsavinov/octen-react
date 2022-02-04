import {useDispatch, useSelector} from "react-redux";

import css from "./Form.module.css";

import {addTodo} from "../../store";

const Form = () => {
    const {todos, completed} = useSelector(state => state.todo);
    const dispatch = useDispatch();
    const submit = (e) => {
        e.preventDefault();
        dispatch(addTodo({todo: e.target.todo.value}));
        e.target.reset();
    }

    return (
        <form onSubmit={submit} className={css.form}>
            <div>
                <div>Total: {todos.length}</div>
                <div>Completed: {completed}</div>
            </div>
            <input type="text" name={"todo"}/>
            <button>Save</button>
        </form>
    )
};

export {Form};