import { useState } from "react";
import { Link } from "react-router-dom";


function Task50() {

    const arrColors = ['yellow', 'green', 'purple'];

    const [color, setColor] = useState('black');

    const getColor = (e) => setColor(e.target.textContent)


    return <>

        <p>
            3. Изменение цвета с использованием useState: Создайте компонент выбора цвета,
            который позволяет пользователю выбирать цвет из списка и отображает цвет
            выбранного цвета на экране
        </p>

        <p style={{ background: color }}>********</p >

        <div>
            {arrColors.map((el, i) => <button key={i} onClick={getColor}>{el}</button>)}
        </div>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}
export default Task50