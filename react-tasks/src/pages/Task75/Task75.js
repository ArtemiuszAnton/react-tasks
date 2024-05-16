import { Link } from "react-router-dom";


function Task75() {

    

    return <>
        <p>
        3. Создайте компонент, который имеет кнопку "Изменить статус". При каждом клике
на кнопку статус компонента должен меняться между "Активный" и "Неактивный".
Используйте useCallback, чтобы оптимизировать функцию изменения статуса
        </p>


        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task75