import { Link } from "react-router-dom";

function Task2() {

    const arr = [144, 4, 9, 112].map(el=>Math.sqrt(el))
    return <div>
        <p>2. На входе статичный массив чисел. Ваша задача найти корень каждого числа и
            отобразить на странице в виде h1
        </p>
        {arr}

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >
    </div>
}

export default Task2