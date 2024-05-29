import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Task61() {

    const [num, setNum] = useState('');

    const getNum = async () => {
        const response = await axios.get(`http://numbersapi.com/${Math.floor(Math.random() * 10)}`);
        setNum(response.data);
    }

    useEffect(() => {
        getNum();
    }, [])

    return <>
        <p>
            5. Факты с использованием useState и useEffect: http://numbersapi.com/:id. Создайте
            компонент React, который при первичном рендеринге отправляет запрос к APIс
            рандомно сгенерированным числом и отображает результат в консоль.
        </p>

        <h1>{num}</h1>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task61