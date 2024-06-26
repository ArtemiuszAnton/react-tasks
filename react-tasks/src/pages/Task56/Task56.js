import { useState } from "react";
import { Link } from "react-router-dom";


function Task56() {

    const [size, setSize] = useState(20);

    return <>
        <p>
            7. Изменение размера шрифта с использованием useState: Создайте компонент,
            который предоставляет две кнопки: "Увеличить" и "Уменьшить". При нажатии на
            эти кнопки значение font-size изменяется соответствующим образом на +/– 1px.
        </p>

        <button onClick={() => setSize(size + 1)}>Увеличить</button>
        <button onClick={() => setSize(size - 1)}>Уменьшить</button>
        <h4 style={{ fontSize: size }}>Text for Test</h4 >


        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task56