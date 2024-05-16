import { useMemo, useState } from "react";
import { Link } from "react-router-dom";


function Task70() {

    const [num, setNum] = useState(0);

    const showNums = () => {
        let sum = 0
        for (let i = 0; i <= num; i++) {
            sum += i
        }
        return sum
    }

    const res = useMemo(() => showNums(), [num])

    return <>
        <p>
            3. Создайте компонент для отображения списка чисел от 1 до N, где N - число,
            введенное пользователем с клавиатуры. Используйте useMemo, чтобы вычислить
            сумму списка чисел только при изменении N.
        </p>

        <input type="text" onChange={(e) => setNum(+e.target.value)} />
        <p>{res}</p>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task70