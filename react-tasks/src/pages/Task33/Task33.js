import { useState } from "react";
import { Link } from "react-router-dom";


function Task33() {
    const [click, setClick] = useState(0)
    function countClick() {
        setClick(click + 1)
    }

    return <>
        <p>
            3. Разработайте компонент, который будет отслеживать
            количество кликов по кнопке и отображать это число.
        </p>

        <h1>{click}</h1>

        <button onClick={countClick}>Click</button>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >
    </>
}


export default Task33