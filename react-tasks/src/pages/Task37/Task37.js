import { useState } from "react";
import { Link } from "react-router-dom";


function Task37() {

    const [btn, setBtn] = useState('')

    const getBtn = (e) => setBtn(e.target.textContent);
    return <>
        <p>
            7. У вас есть три кнопки: "О нас", "Цена", "Главная страница".
            Заголовок H1 должен отображать текст активной (нажатой) кнопки.
            Например, если нажата кнопка "Цена", в заголовке должно
            отображаться слово "Цена".
        </p>

        <h1>{btn}</h1>

        <button onClick={getBtn}>О нас</button>
        <button onClick={getBtn}>Цена</button>
        <button onClick={getBtn}>Главная страница</button>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task37