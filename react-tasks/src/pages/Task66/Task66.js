import { useRef } from "react";
import { Link } from "react-router-dom";


function Task66() {

    const count = useRef(0);

    return <>
        <p>
            5. Реализуйте компонент, который отслеживает количество кликов на кнопку с
            помощью useRef и выводит это число в консоль при каждом клике
        </p>

        <button onClick={() => console.log(count.current ++)}>+click</button >

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task66