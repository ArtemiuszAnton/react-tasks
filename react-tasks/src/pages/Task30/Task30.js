import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Task30() {

    const [form, setForm] = useState({
        name: '',
        surname: '',
    });

    const getName = (e) => setForm({ ...form, [e.target.id]: e.target.value })

    const showName = () => form

    return <>
        <p>10. По клику на кнопку собрать данные из двух input: name, surname. Работать с 1
            state, первоначальное значение которого [name: ‘’, surname: ‘’]. Проверить
            значения 2 input на пустоту. Структура state:</p>

        <input id="name" type="text" placeholder="name" onChange={getName} />
        <input id="surname" type="text" placeholder="surname" onChange={getName} />
        <button onClick={showName}>Show name</button>
        <p>{form.name} {form.surname}</p>


        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >
    </>
}



export default Task30