import { Link } from "react-router-dom";


function Task5() {
    const arr = ['rrree', '@fdf', 2222, 'eere', 3333].map((el) => {
        if (isNaN(el)) {
            return <p>{el}</p>
        } else {
            return el % 2 == 0 ? <p>четный</p> : <p>нечетный</p>
        }
    });

    return <div>
        <p>
            5. На входе статичный массив чисел и букв. Ваша задача отобразить на странице в
            случае числа четность и нечетность текущего значения в параграфе, в случае
            строки отобразить саму строку в параграфе


        </p>
        {arr}

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </div>
}


export default Task5