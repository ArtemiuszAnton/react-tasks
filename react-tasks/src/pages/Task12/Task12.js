import { Link } from "react-router-dom";


function Task12() {

    const arr = [1, 2, 4, 4, 5].map(el => el % 2 == 0 ? 'четное ' : 'нечетное ')


    return <>
        <p>
            6. Создайте компонент, который принимает статичный массив чисел и выводит
            информацию о том, является ли каждое число четным или нечетным.

        </p>
        {arr}

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task12