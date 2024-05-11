import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Task47() {

    const [flag, setFlag] = useState(true);

    const getFlag = () => setFlag(flag ? false : true);

    return <>

        <p>
            2. Отображение текста с использованием useState: Создайте компонент, который
            предоставляет две кнопки: "Показать" и "Скрыть". При нажатии на "Показать"
            отображается текст, а при нажатии на "Скрыть" текст скрывается.
        </p>

        <p>{flag ? 'TEXT' : ''}</p>
        <button onClick={getFlag}>{!flag ? 'Показать' : 'Скрыть'}</button>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task47