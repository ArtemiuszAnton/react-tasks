import { Link } from "react-router-dom";
import { useContext } from "react";
import { Task78Context } from "../../context";

function Task78() {

    const userInfo = useContext(Task78Context);



    return <>
        <p>
            1. Используйте useContext, чтобы сохранять данные о текущем пользователе.
            Отобразите эту информацию в компоненте, используя контекст.
        </p>

        <p>{userInfo.name}</p>
        <p>{userInfo.surname}</p>
        <p>{userInfo.age}</p>
        <p>{userInfo.email}</p>


        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task78