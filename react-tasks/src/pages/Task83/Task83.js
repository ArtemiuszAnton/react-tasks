import { useReducer } from "react";
import { Link } from "react-router-dom";


const reducer = (state, data) => {
    switch (data.action) {
        case 'changeFlag':
            if (state) {
                return false
            } else {
                return true
            }
        default:
            break;
    }
}

function Task83() {

    const [flag, dispatch] = useReducer(reducer, true);

    return <>
        <p>
            2. Создайте компонент с текстом и кнопкой. Текст включает 2 состояния «on» и «off».
            По клику на кнопку текст меняется на противоположный
        </p>

        <button onClick={() => dispatch({ action: 'changeFlag' })}>{flag ? 'OFF' : 'ON'}</button>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task83