import { useState } from "react";
import { Link } from "react-router-dom";


function Task28() {

    const [count, setCount] = useState(0)

    const getCountPlus = () => setCount(count + 1)
    const getCountMinus = () => setCount(count - 1)

    return <>
        <p>
            8. Дополните предыдущую задачу. Создайте компонент с 2 кнопками и параграфом
            для отображения результата счетчика (изначально счетчик равен 0). Ваша задача
            так реализовать функционал, чтобы при клике на кнопку +1 автоматически
            прибавлялась +1 к стейту счетчика, а при клике на кнопку -1, происходило
            вычитание значения 1

        </p>

        <p>{count}</p>
        <button onClick={getCountPlus}>+1</button>
        <button onClick={getCountMinus}>-1</button>


        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task28