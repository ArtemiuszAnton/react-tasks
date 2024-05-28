import { useReducer, useRef } from "react";
import { Link } from "react-router-dom";


function Task88() {

    const inp = useRef();

    return <>
        <p>
            2. useRef. По клику на кнопку получить value инпута
        </p>

        <input type="text" ref={inp} />
        <button onClick={() => console.log(inp.current.value)}>show inp</button>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task88