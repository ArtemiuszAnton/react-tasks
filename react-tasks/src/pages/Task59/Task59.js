import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Task59() {

    const [ip, setIp] = useState('');

    const getIp = async () => {
        const response = await axios.get('https://api.ipify.org/?format=json');

        setIp(response.data.ip)
    }

    useEffect(() => {
        getIp()
    }, [])

    return <>
        <p>
            3. Запрос к API с использованием useState и useEffect: Создайте компонент, который
            выполняет запрос к API https://api.ipify.org/?format=json и отображает полученные
            данные в заголовок.
        </p>

        <h1>{ip}</h1>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task59