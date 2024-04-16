import { useState } from "react"

function Task003() {
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
    </>
}


export default Task003