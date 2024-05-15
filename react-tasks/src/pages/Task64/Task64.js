import { useRef } from "react";
import { Link } from "react-router-dom";


function Task64() {

    const h_1 = useRef();

    return <>
        <p>
            3. Создайте компонент, который при каждом клике на кнопку увеличивает размер
            шрифта текста в элементе на странице.
        </p>

        <h1 style={{ fontSize: 16 }} ref={h_1}>Text</h1>
        <button onClick={() => h_1.current.style.fontSize = parseInt(h_1.current.style.fontSize) + 10 + `%`}>+Size</button >

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task64