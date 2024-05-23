import { Link } from "react-router-dom";


function Task85() {



    return <>
        <p>
            4. Вам предоставлен массив цветов, таких как red, blue, purple, pink. При клике на
            кнопку ваша задача изменить цвет заголовка на цвет, соответствующий нажатой
            кнопке.
        </p>


        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task85