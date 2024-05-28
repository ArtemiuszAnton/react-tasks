import axios from "axios";
import { useEffect, useReducer, useRef } from "react";
import { Link } from "react-router-dom";


function Task89() {

    const inp = useRef();

    const getNumber = async () => {
        const response = await axios.get(`http://numbersapi.com/${inp.current.value}`);
        return response.data
    }


    return <>
        <p>
            3. useRef. По клику на кнопку получить числовое value инпута и отправить запрос к
            http://numbersapi.com/:id (где id – значение input). Результат отобразить в консоль
        </p>

        <input type="text" ref={inp} />
        <button onClick={async () => console.log(await getNumber())}>click</button >

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task89