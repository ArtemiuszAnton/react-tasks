import { useCallback, useState } from "react";
import { Link } from "react-router-dom";


function Task73() {

    const [count, setCount] = useState(0);

    const getCount = useCallback(() => setCount(count + 1), [count]);

    return <>
        <p>
            1. Создайте компонент с кнопкой "Увеличить счетчик". При каждом клике на кнопку
            счетчик должен увеличиваться на 1. Используйте useCallback, чтобы
            оптимизировать обработчик клика на кнопке.
        </p>

        <p>{count}</p>

        <button onClick={getCount}>+1</button>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task73