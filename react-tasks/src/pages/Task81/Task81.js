import { Link } from "react-router-dom";


function Task81() {



    return <>
        <p>
            4. Разработайте простое приложение для переключения между светлой и темной
            темами. Используйте useContext, чтобы хранить информацию о текущей теме
            (светлая или темная). В компоненте отобразите интерфейс, который позволяет
            пользователю переключаться между темами
        </p>


        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task81