import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Task47() {

    const [res, setRes] = useState([]);
    const [flag, setFlag] = useState(false);
    const [text, setText] = useState('');

    const getRes = async () => {
        const response = await axios.get('http://universities.hipolabs.com/search?country=Belarus');
        setRes(response.data);
    }

    const getText = (e) => setText(e.target.textContent);

    const getFlag = () => !flag ? setFlag(true) : setFlag(false);

    useEffect(() => {
        getRes()
    }, [])



    return <>

        <p>7. Совместить задачи 3 и 6. По клику на кнопку
            отображать университеты выбранной страны
        </p>




        <button onClick={getFlag}>{!flag ? 'Choose University' : text}</button>


        {flag ? res.map((el) => <p onClick={getText}>{el.name}</p>) : ''}



        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task47