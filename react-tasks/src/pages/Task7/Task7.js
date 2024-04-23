import { Link } from "react-router-dom";


function Task7() {
    const arr = [1, 2, -4, 55, -6, 34].map(el => el < 0 ? <p>---</p> : <p>+++</p>)


    return <div>
        <p>1. Создайте компонент, который принимает статичный массив чисел и выводит в
            параграф информацию о положительности и отрицательности числа.</p>
            {arr}

            <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </div>
}


export default Task7