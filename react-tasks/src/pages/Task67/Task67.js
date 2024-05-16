import { useRef } from "react";
import { Link } from "react-router-dom";


function Task67() {

    const h1 = useRef();

    return <>
        <p>
            6. Разработайте компонент для реализации "подсказок" (tooltips). При наведении на
            элемент интерфейса (например, кнопку), компонент отображает подсказку с
            текстом. (onMouseEnter срабатывает, когда курсор мыши входит в область
            элемента. onMouseLeave срабатывает, когда курсор мыши покидает область
            элемента.)
        </p>

        <button
            onMouseEnter={() => h1.current.textContent = 'tooltips'}
            onMouseLeave={() => h1.current.textContent = ''}>
            FOCUS
        </button>

        <p ref={h1}></p>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task67