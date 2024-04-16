import { useState } from "react"

function Task004() {
    const [text, setText] = useState('');

    function showText(e) {
        setText(e.target.value)
    }

    return <>
        <p>4. Выводите каждое введенное значение из поля ввода
            (input) в заголовке H1.</p>
        <h1>{text}</h1>
        <input type="text" onChange={showText} />
    </>

}


export default Task004