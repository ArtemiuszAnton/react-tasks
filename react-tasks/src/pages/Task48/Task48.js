import { useState } from "react";
import { Link } from "react-router-dom";


function Task48() {

    const [inp, setInp] = useState('');

    const getInp = (e) => setInp(e.target.value);


    return <>

        <p>
            1. Форма с использованием useState: Создайте компонент текстового поля, который
            позволяет пользователю по изменению значения инпута отображать значение в
            консоль.
        </p>

        <input type="text" onChange={getInp} />
        <p>{inp}</p>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task48