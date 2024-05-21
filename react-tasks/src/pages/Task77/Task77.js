import { useState, useCallback } from "react";
import { Link } from "react-router-dom";


function Task77() {

    const [arr, setArr] = useState([1, 2, 3, 4, 5]);
    const [inp, setInp] = useState('');

    const changeArr = useCallback((currentEl) => setArr(arr.filter((el) => el != currentEl)), [arr]);
    const addElem = useCallback(() => setArr([...arr, inp]), [inp]);

    return <>
        <p>
            5. Создайте компонент, который позволяет пользователю добавлять и удалять
            элементы из списка. Используйте useCallback, чтобы оптимизировать функции
            добавления и удаления элементов
        </p>

        <input type="text" onChange={(e) => setInp(e.target.value)} />
        <button onClick={addElem}>Add Elem</button>

        {arr.map((currentEl, i) => <p key={i}>{currentEl}<button onClick={() => changeArr(currentEl)}>delete</button></p>)}

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task77