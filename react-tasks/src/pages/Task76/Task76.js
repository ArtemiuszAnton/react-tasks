import { useCallback, useState } from "react";
import { Link } from "react-router-dom";


function Task76() {

    const [color, setColor] = useState('white');

    const getColor = useCallback((e) => setColor(e.target.textContent), [color])

    return <>
        <p>
            4. Создайте компонент, который предоставляет пользователю выбор цвета из
            списка. При выборе цвета, компонент должен отображать выбранный цвет на
            странице. Используйте useCallback, чтобы оптимизировать функцию выбора
            цвета.
        </p>

        <p style={{ backgroundColor: color }}>{color != 'white' ? color : ''}</p>

        <ul onClick={getColor}>
                <li>green</li>
                <li>purple</li>
                <li>red</li>
                <li>blue</li>
                <li>yellow</li>
        </ul>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task76