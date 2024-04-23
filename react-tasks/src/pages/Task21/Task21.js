import { useState } from "react"
import { Link } from "react-router-dom";


function Task21() {

    const [inp, setInp] = useState('');

    const showInpValue = (e) => setInp(e.target.value);

    return <>
        <h1>
            1. Создайте компонент с полем ввода и параграфом. При вводе данных в input
            отображать вводимое значение в параграф текущей страницы
        </h1>

        <p>{inp}</p>

        <input onChange={showInpValue} type="text" />

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task21