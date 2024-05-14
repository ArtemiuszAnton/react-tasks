import { useState } from "react";
import { Link } from "react-router-dom";


function Task62() {

    

    return <>
        <p>
            7. Изменение размера шрифта с использованием useState: Создайте компонент,
            который предоставляет две кнопки: "Увеличить" и "Уменьшить". При нажатии на
            эти кнопки значение font-size изменяется соответствующим образом на +/– 1px.
        </p>


        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task62