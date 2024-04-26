import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


function Task38() {

    const [ip, setIp] = useState('');

    const getIp = async () => {
        const response = await fetch('https://api.ipify.org/?format=json', { method: 'GET' })

        const parsedData = await response.json();
        setIp(parsedData)
    }

    useEffect(() => {
        getIp()
    }, [])

    return <>
        <h1>{ip.ip}</h1>


        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >
    </>



}


export default Task38