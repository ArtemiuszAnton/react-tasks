import { useReducer} from "react";
import { Link } from "react-router-dom";


function reducer(_state, data) {
    switch (data.action) {
        case 'addValue':
            return data.value;
        default:
            break;
    }
}

function Task84() {

    const [inp, dispatch] = useReducer(reducer, '')

    return <>
        <p>
            3. Создайте компонент отслеживающий вводимое значение в input. Результат
            отображать в h1
        </p>

        <h1>{inp}</h1>

        <input type="text" onChange={(e) => dispatch({ action: 'addValue', value: e.target.value })} />

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task84