import { useReducer } from "react";
import { Link } from "react-router-dom";


function reducer(state, data) {
    switch (data.action) {
        case 'plus':
            return state + 1;
        case 'minus':
            return state - 1;
        case 'reset':
            return 0;
        default:
            break;
    }
}

function Task82() {

    const [count, dispatch] = useReducer(reducer, 0);


    return <>
        <p>
            1. Создайте компонент счетчика, который может увеличивать, уменьшать,
            сбрасывать значение при нажатии на соответствующие кнопки.
        </p>

        <h1>{count}</h1>

        <button onClick={() => dispatch({ action: 'plus' })}>+1</button >
        <button onClick={() => dispatch({ action: 'minus' })}>-1</button>
        <button onClick={() => dispatch({ action: 'reset' })}>Reset</button>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task82