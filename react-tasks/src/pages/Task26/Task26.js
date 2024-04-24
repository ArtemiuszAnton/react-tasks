import { useState } from "react";
import { Link } from "react-router-dom";


function Task26() {

    const [inp, setInp] = useState('');
    const [flag, setFlag] = useState(false);

    const getInp = (e) => setInp(e.target.value);

    const getFlag = () => !flag ? setFlag(true) : setFlag(false)

    return <>
        <p>
            6. Создайте компонент с кнопкой "Показать/Скрыть текст". При нажатии на кнопку
            текст должен появляться или исчезать
        </p>

        <input type="text" onChange={getInp} />
        <button onClick={getFlag}>{!flag ? 'Показать текст' : 'Скрыть текст'}</button>
        <p>{flag ? `${inp}` : ''}</p>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task26