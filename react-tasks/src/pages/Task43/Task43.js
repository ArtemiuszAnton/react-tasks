import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Task43() {

    const [res, setRes] = useState([]);

    const getRes = async () => {
        const response = await axios.get('http://universities.hipolabs.com/search?country=Belarus');
        setRes(response.data);
    }

    useEffect(() => {
        getRes()
    }, [])

    return <>

        <p>3. При ПЕРВИЧНОМ рендеринге (useEffect) используя axios обращаться к
            http://universities.hipolabs.com/search?country=Belarus. API возвращает
            университеты страны переданной в качестве одного из доментов url. Ваша задача
            отображать все университеты в тег параграф.</p>

        <p>{res.map(el => <p>{el.name}</p>)}</p>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task43