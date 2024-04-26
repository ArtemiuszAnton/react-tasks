import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Task44() {

    const [num, setNum] = useState(0);

    const plusNum = () => {
        setNum(num + 1)
    }
    const minusNum = () => {
        setNum(num - 1)
    }
    const resetNum = () => {
        setNum(0)
    }
    const multNum = () => {
        setNum(num * 2)
    }

    return <>

        <p>4. Создайте три кнопки с названиями: "+1", "-1", "Сброс". При нажатии на кнопку "+1"
            значение счётчика увеличивается на 1, при нажатии на кнопку "-1" значение
            счётчика уменьшается на 1, а при нажатии на кнопку "Сброс" значение счётчика
            обнуляется. Значение счетчика отображать в h1
        </p>


        <h1>{num}</h1>

        <button onClick={plusNum}>+1</button>
        <button onClick={minusNum}>-1</button>
        <button onClick={multNum}>x2</button>
        <button onClick={resetNum}>Reset</button>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task44