import { useCallback, useState } from "react";
import { Link } from "react-router-dom";


function Task74() {

    const [arr, setArr] = useState([1, 2, 3, 4, 5]);

    const changeArr = useCallback((currentEl) => setArr(arr.filter((el) => el != currentEl)), [arr]);

    return <>
        <p>
            2. Создайте компонент, который отображает список элементов с кнопками
            "Удалить". При нажатии на кнопку элемент должен быть удален из списка.
            Используйте useCallback, чтобы оптимизировать функцию удаления элемента
        </p>

        {arr.map(currentEl => <p>{currentEl}<button onClick={() => changeArr(currentEl)}>delete</button></p>)}

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task74