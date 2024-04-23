import { Link } from "react-router-dom";


function Task13() {

    const arr = ['RAZ', 'DWA', 'TRI', 'dwfwfwfw'].map(el =>
        <p style={{ "color": '#' + Math.floor(Math.random() * 999) }} > {el}</p >);

    return <div>
        <h1>
            7. Создайте компонент, который принимает статичный массив элементов и
            присваивает каждому элементу случайный цвет фона. Выведите элементы с их
            цветами на странице.

        </h1>
        {arr}

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </div>
}


export default Task13