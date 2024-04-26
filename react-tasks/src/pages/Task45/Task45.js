import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Task45() {

    const [inp, setInp] = useState('');

    const getInp = (e) => setInp(e.target.value);



    return <>

        <p>5. Создайте форму ввода, в которой пользователь может вводить своё имя и
            отображать его под формой.
        </p>

        <h1>{inp}</h1>

        <input type="text" placeholder="Введите ваше имя" onChange={getInp} />



        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task45