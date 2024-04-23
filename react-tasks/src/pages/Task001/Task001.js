import { useState } from "react"
import { Link } from "react-router-dom";

function Task001() {
    const [color, setColor] = useState('black');
    const [flag, setFlag] = useState(false);
    const arr = ['yellow', 'green', 'purple', 'orange'];

    function changeColor() {
        setFlag(flag ? false : true)
        setColor(arr[Math.floor(Math.random() * arr.length)]);
    }

    return <>

        <p>1. Создайте кнопку с названием "Добавить цвет". При клике на эту кнопку цвет
            шрифта заголовка H1 должен измениться. При следующем клике цвет должен вернуться в первоначальное состояние. Текст кнопки также должен меняться с "Открыто" на "Закрыто"
            при нажатии на саму кнопку.</p>

        <h1 style={{ color: color }}>TEXT</h1 >
        <button onClick={changeColor}>{flag ? 'delete color' : 'Add color'}</button>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >
    </>

}


export default Task001