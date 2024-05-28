import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";


function Task87() {

    const h1 = useRef();
    const getIp = async () => {
        const response = await axios.get('https://api.ipify.org/?format=json');
        h1.current.textContent = response.data.ip
    }

    useEffect(() => {
        getIp()
    }, [])

    return <>
        <p>
            1. useRef, useEffect. По условию useRef хранит ссылку на тег h1 в html. Ваша задача
            при первичном рендеринге отправить запрос на https://api.ipify.org/?format=json и
            отобразить в textContent h1 результат
        </p>

        <h1 ref={h1}></h1>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task87