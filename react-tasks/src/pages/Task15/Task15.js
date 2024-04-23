import { Link } from "react-router-dom";


function Task15() {

    const str = 'BOLS';

    function checkStr() {
        try {
            if (!/^[\w\.\_\-\@\$\&]{8,}/gm.test(str)) throw new Error('not valid pwd');
            alert(true)
        } catch (er) {
            alert(er.message)
        }
    }

    return <div>
        <p>
            1. На входе переменная пароля. По клику на кнопку необходимо реализовать метод
            валидации. Написать регулярное выражение: пароль от 8 символов, содержит
            числа, буквы, !@#$^&*. Результат отобразить в консоль
        </p>

        <button onClick={checkStr}>КЛАЦ</button>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </div>
}


export default Task15