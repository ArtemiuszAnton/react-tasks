import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Task60() {

    const [time, setTime] = useState(new Date());


    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000)
    })


    return <>
        <p>
            4. Таймер с использованием useState и useEffect: Создайте компонент, который
            отображает текущее время и обновляет его каждую секунду.
        </p>

        <h1>{time.toLocaleTimeString()}</h1>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task60