import { useReducer } from "react";
import { Link } from "react-router-dom";


function reducer(_state, action) {
    switch (action) {
        case 'red':
            return action;
        case 'blue':
            return action;
        case 'purple':
            return action;
        case 'pink':
            return action;
        default:
            break;
    }
}


function Task85() {

    const [color, dispatch] = useReducer(reducer, 'black');
    const arrColors = ['red', 'blue', 'purple', 'pink'];

    return <>
        <p>
            4. Вам предоставлен массив цветов, таких как red, blue, purple, pink. При клике на
            кнопку ваша задача изменить цвет заголовка на цвет, соответствующий нажатой
            кнопке.
        </p>

        <h1 style={{ color: color }}>TEXT</h1>

        {arrColors.map((el, i) => (<button key={i} onClick={(e) => dispatch(e.target.textContent)}>{el}</button>))}


        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task85