import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Task52() {

    const [inp, setInp] = useState('');
    const [flag, setFlag] = useState(false);

    const getInp = (e) => setInp(e.target.value);
    const getFlag = () => setFlag(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/gm.test(inp)) ? false : true)
    console.log(flag);

    return <>
        <p>
            5. Форма с использованием useState: Создайте компонент текстового поля, который
            позволяет пользователю вводить текст и проверять введенный текст регулярным
            выражением на почту по нажатию на кнопку. В заголовок отобразить true если
            введенная строка удовлетворяет регулярному выражению и false в противном
            случае.
        </p>

        <h1>{flag.toString()}</h1>

        <input type="text" onChange={getInp} />
        <button onClick={getFlag}>Check Valid Email</button>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task52