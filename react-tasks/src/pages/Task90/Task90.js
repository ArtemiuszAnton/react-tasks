import axios from "axios";
import { useRef } from "react";
import { Link } from "react-router-dom";


function Task90() {

    const inp = useRef();
    const h1 = useRef();

    const getInp = async () => {
        const response = await axios.get(`http://numbersapi.com/${inp.current.value}`);
        h1.current.textContent = response.data;
    }



    return <>
        <p>
            4. Дополнить задачу №3. Результат, полученный из http://numbersapi.com/:id
            отобразить в заголовке с помощью useRef
        </p>

        <h1 ref={h1}></h1>
        <input type="text" ref={inp} />
        <button onClick={async () => await getInp()}></button>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task90