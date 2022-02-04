import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    completed: 0
}

const todoSlice = createSlice({
        name: "todoSlice",
        initialState,
        reducers: {
            addTodo: (state, action) => {
                state.todos.push({id: new Date().getTime(), name: action.payload.todo, status: false})
            },
            changeStatus: (state, action) => {
                const todo = state.todos.find(todo => todo.id === action.payload.id);
                todo.status = !todo.status;
                if (todo.status) {
                    state.completed++;
                } else {
                    state.completed--;
                }
            },
            deleteTodo: (state, action) => {
                const index = state.todos.findIndex(todo => todo.id === action.payload.id);
                if (state.todos[index].status) {
                    state.completed--;
                }
                state.todos.splice(index, 1);
            }
        }
    }
)

const todoReducer = todoSlice.reducer;

export const {addTodo, changeStatus, deleteTodo} = todoSlice.actions;
export default todoReducer;
