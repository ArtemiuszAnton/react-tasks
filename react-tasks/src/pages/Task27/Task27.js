import { useState } from "react";
import { Link } from "react-router-dom";


function Task27() {

    const [count, setCount] = useState(0);

    const getCount = () => setCount(count + 1)

    return <>
        <p>
            7. Создайте компонент с кнопкой и параграфом для отображения результата
            счетчика (изначально счетчик равен 0). Ваша задача так реализовать функционал,
            чтобы при клике на кнопку автоматически прибавлялась +1 к стейту счетчика
        </p>

        <p>{count}</p>
        <button onClick={getCount}>+1</button>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task27