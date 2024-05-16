import { Link } from "react-router-dom";


function Task73() {

    

    return <>
        <p>
        1. Создайте компонент с кнопкой "Увеличить счетчик". При каждом клике на кнопку
счетчик должен увеличиваться на 1. Используйте useCallback, чтобы
оптимизировать обработчик клика на кнопке.
        </p>


        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task73