import { useState, useMemo } from "react";
import { Link } from "react-router-dom";


function Task68() {

    const [inp1, setInp1] = useState();
    const [inp2, setInp2] = useState();

    // const doSum = () => inp1 + inp2

    const res = useMemo(() => inp1 + inp2, [inp1, inp2]);

    return <>
        <p>
            1. Создайте компонент React, который отображает сумму двух чисел. Используй хук
            useState для хранения значений чисел и хук useMemo для кэширования
            результата суммы. При изменении значений чисел, сумма должна
            пересчитываться только тогда, когда необходимо
        </p>

        <input type="text" onChange={(e) => setInp1(+e.target.value)} />
        <input type="text" onChange={(e) => setInp2(+e.target.value)} />
        <p>{res}</p>
        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task68