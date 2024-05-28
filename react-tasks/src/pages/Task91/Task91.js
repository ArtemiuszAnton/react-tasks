import { useContext } from "react";
import { Task91Context } from "../../context";
import { Link } from "react-router-dom";


function Task91() {

    const winner = useContext(Task91Context);

    return <>
        <p>
            5. Воспроизвести пример работы useContext
        </p>

        <p>{winner.spain}</p>
        <p>{winner.germany}</p>
        <p>{winner.italy}</p>
        <p>{winner.england}</p>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task91