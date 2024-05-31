import { useCallback, useState } from "react";
import { Link } from "react-router-dom";


function Task75() {

    const [flag, setFlag] = useState(true);

    const getFlag = useCallback(() => {
        setFlag(flag ? false : true);
    }, [flag]);

    return <>
        <p>
            3. Создайте компонент, который имеет кнопку "Изменить статус". При каждом клике
            на кнопку статус компонента должен меняться между "Активный" и "Неактивный".
            Используйте useCallback, чтобы оптимизировать функцию изменения статуса
        </p>
        <div>
            <p>{flag ? 'Active' : ''}</p>
            <button onClick={getFlag}>{flag ? 'Deactive' : 'active'}</button>
        </div>
        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task75