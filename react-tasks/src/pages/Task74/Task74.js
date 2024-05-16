import { Link } from "react-router-dom";


function Task74() {

    

    return <>
        <p>
        2. Создайте компонент, который отображает список элементов с кнопками
"Удалить". При нажатии на кнопку элемент должен быть удален из списка.
Используйте useCallback, чтобы оптимизировать функцию удаления элемента
        </p>


        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task74