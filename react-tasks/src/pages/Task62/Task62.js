import { useRef, useState } from "react";
import { Link } from "react-router-dom";


function Task62() {

    // const [color, setColor] = useState('black');
    const color = useRef();

    return <>
        <p>
            1. Создайте компонент, который по клику на кнопку меняет цвет текста на красный
        </p>

        <h1 ref={color}>Text</h1>
        <button onClick={() =>  color.current.style.color = 'yellow' }>Change Color</button>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task62