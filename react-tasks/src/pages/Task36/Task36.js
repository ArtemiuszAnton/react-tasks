import { useState } from "react";
import { Link } from "react-router-dom";


function Task36() {

    const [title, setTitle] = useState('');

    const arr = ['Одно', 'из', 'слов', 'в', 'этом', 'предложении', 'должно', 'всплыть', 'ниже.']

    const getTitle = () => setTitle(arr[Math.floor(Math.random() * arr.length)])

    return <>
        <p>6. Создайте компонент, который при нажатии на кнопку будет
            показывать случайную строку в заголовке H1. Строки хранятся
            в массиве.</p>

        <h1>{arr.join(' ')}</h1>
        <p>{title}</p>
        <button onClick={getTitle}>КЛАЦ</button>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task36