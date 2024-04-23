import { useState } from "react";
import { Link } from "react-router-dom";


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

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>

}


export default Task004