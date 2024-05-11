import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Task54() {

    const [inp, setInp] = useState('');

    useEffect(() => {
        console.log(inp);
    })

    return <>
        <p>
            1. Форма ввода с использованием useState и useEffect: Создайте компонент React,
            который содержит форму с полем ввода. Используйте хук useState для хранения
            значения введенного текста и хук useEffect для отслеживания изменений этого
            значения. При каждом изменении значения в поле ввода, выводить его в консоль
            с помощью useEffect.
        </p>

        <input type="text" onChange={(e) => setInp(e.target.value)} />

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task54