import { Link } from "react-router-dom";


function Task3() {
    const arr = ['21122eeewwed', '@fdfdfdf', 'fdece22@eere', 'ererre'].filter(el =><p>{el.includes('@')}</p> );
    return <div>
        <p>
            3. На входе статичный массив строк. Ваша задача отфильтровать и отобразить на
            странице только те строки, которые содержат знак @

        </p>
        {arr}

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </div>
}


export default Task3