import { useReducer } from "react";
import { Link } from "react-router-dom";

const reducer = (state, data) => {
    switch (state) {
        case 'addValue':
            return data.action
        default:
            break;
    }
}

function Task86() {

    const [inp1, dispatch1] = useReducer(reducer, 0);
    const [inp2, dispatch2] = useReducer(reducer, 0);


    return <>
        <p>
            5. Создайте компонент отслеживающий вводимое значение 2 input. Посчитать
            сумму 2 input. По клику на кнопку отображать результат в консоль
        </p>

        <input type="text" onChange={(e) => dispatch1({ action: 'addValue', value: e.target.value })} />
        <input type="text" onChange={(e) => dispatch2({ action: 'addValue', value: e.target.value })} />
        <button onClick={() => console.log(eval(+inp1 + +inp2))}>result</button >

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task86