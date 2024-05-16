import { useMemo, useState } from "react";
import { Link } from "react-router-dom";


function Task69() {

    const [num, setNum] = useState(1);

    const factNum = (num) => {
        if (num == 0) return 0
        if (num == 1) return 1
        return num * factNum(num - 1);
    }

    const res = useMemo(() => factNum(num), [num])

    return <>
        <p>
            2. Разработайте компонент, который выполняет факториал числа при вводе
            значения в текстовое поле. Используйте useMemo, чтобы кэшировать результаты
            вычислений для разных введенных значений и отображать их без повторных
            вычислений.
        </p>

        <input type="text" onChange={(e) => setNum(+e.target.value)} />
        <p>{res}</p>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task69