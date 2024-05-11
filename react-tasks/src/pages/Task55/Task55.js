import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Task55() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1)
        },1000)

        return () => clearInterval(interval)
    })



    return <>
        <p>
            2. Счетчик с использованием useState и useEffect: Создайте компонент счетчика,
            который увеличивает значение счетчика на 1 каждую секунду с использованием
            useEffect.
        </p>

        <h1>{count}</h1>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task55