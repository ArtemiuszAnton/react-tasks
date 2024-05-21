import { useCallback, useState } from "react";
import { Link } from "react-router-dom";


function Task76() {

    const [color, setColor] = useState(['green', 'purple', 'red', 'blue']);

    const getColor = useCallback((e) => color = setColor(e.target.textContent))

    return <>
        <p>
            4. Создайте компонент, который предоставляет пользователю выбор цвета из
            списка. При выборе цвета, компонент должен отображать выбранный цвет на
            странице. Используйте useCallback, чтобы оптимизировать функцию выбора
            цвета.
        </p>

        <p style={{ backgroundColor: color }}></p>

        {color.map(el => <p onClick={getColor}>{el}</p>)}

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task76