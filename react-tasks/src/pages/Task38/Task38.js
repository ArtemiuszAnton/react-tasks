import { useState } from "react";
import { Link } from "react-router-dom";


function Task38() {

    const [inp, setInp] = useState('');

    const getInp = (e) => setInp(e.target.value);


    const calculateInp = () => {
        try {
            return eval(inp)
        } catch (er) {
            return 'Закончите выражение'
        }
    }

    return <>
        <p>
            8. Создайте поле ввода, в которое пользователь вводит математическое выражение.
            По нажатию на кнопку необходимо вычислить результат выражения
            (используйте функцию eval()) и отобразить его в заголовке H1.
        </p>

        <h3>{calculateInp()}</h3>
        <input type="text" value={inp} onChange={getInp} />
        <button onClick={calculateInp}>Получить результат</button>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}>
            <Link to={'/'}>Вернуться на главную</Link>
        </button >

    </>
}


export default Task38