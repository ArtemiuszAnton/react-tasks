import { Link } from "react-router-dom";


function Task18() {

    const color = ['red', 'white', 'blue'];

    function changeColor(e) {
        e.target.style = `background:${color[Math.round(Math.random() * color.length)]}`
    }

    return <>
        <p>
            4. Реализуйте компонент с кнопкой, которая при каждом нажатии меняет свой цвет
            в соответствии с массивом цветов ['red', 'white', 'blue']. Используйте рандомный
            выбор цвета из массива при каждом клике.
        </p>

        <button onClick={changeColor}>КЛАЦ</button>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task18