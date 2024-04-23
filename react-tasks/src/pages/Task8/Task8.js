import { Link } from "react-router-dom";


function Task8() {
    const arr = [23, 4, 6, 8, 9];

    return <div>
        <p>
            2. Реализуйте компонент, который принимает статичный массив чисел и выводит
            минимальное и максимальное значения на странице.
        </p>
       максимальное: {Math.max(...arr)}, 
       минимальное: {Math.min(...arr)}

       <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </div>
}


export default Task8