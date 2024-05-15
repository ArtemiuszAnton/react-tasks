import { useRef, useState } from "react";
import { Link } from "react-router-dom";


function Task63() {

    const h_1 = useRef();

    return <>
        <p>
            2. Создайте компонент, который по клику на кнопку рандомно у h1 меняет цвет
            текста
        </p>

        <h1 ref={h_1}>Text</h1>
        <button onClick={() => h_1.current.style.color = `#${Math.floor(Math.random() * 999)}`}>Change color</button >

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task63