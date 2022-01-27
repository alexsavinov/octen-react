import {useReducer} from "react";

import "./App.css";

const reducer = (state, action) => {
    switch (action.type) {
        case 'increase':
            return {...state, [`count${action.id}`]: state[`count${action.id}`] + 1};
        case 'decrease':
            return {...state, [`count${action.id}`]: state[`count${action.id}`] - 1};
        case 'reset':
            return {...state, [`count${action.id}`]: action.payload};
        default:
            throw new Error('Unsupported action type!');
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0});

    return (
        <div className={'wrap'}>
            <div className={'counter'}>
                <div className={'name'}>Counter 1:</div>
                <div className={'counter'}>{state.count1}</div>
                <div className={'buttons'}>
                    <button onClick={() => dispatch({type: 'increase', id: 1})}>+</button>
                    <button onClick={() => dispatch({type: 'decrease', id: 1})}>-</button>
                    <button onClick={() => dispatch({type: 'reset', id: 1, payload: 0})}>RESET</button>
                </div>
            </div>
            <div className={'counter'}>
                <div className={'name'}>Counter 2:</div>
                <div className={'counter'}>{state.count2}</div>
                <div className={'buttons'}>
                    <button onClick={() => dispatch({type: 'increase', id: 2})}>+</button>
                    <button onClick={() => dispatch({type: 'decrease', id: 2})}>-</button>
                    <button onClick={() => dispatch({type: 'reset', id: 2, payload: 0})}>RESET</button>
                </div>
            </div>
            <div className={'counter'}>
                <div className={'name'}>Counter 3:</div>
                <div className={'counter'}>{state.count3}</div>
                <div className={'buttons'}>
                    <button onClick={() => dispatch({type: 'increase', id: 3})}>+</button>
                    <button onClick={() => dispatch({type: 'decrease', id: 3})}>-</button>
                    <button onClick={() => dispatch({type: 'reset', id: 3, payload: 0})}>RESET</button>
                </div>
            </div>
        </div>
    );
}

export default App;
