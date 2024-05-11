import { useState } from "react";
import { Link } from "react-router-dom";


function Task51() {

    const [task, setTask] = useState(['do job', 'do fitness', 'do eat', 'do sleep']);
    const [inp, setInp] = useState('');


    return <>

        <p>
            4. Список задач с использованием useState: Создайте компонент списка задач,
            который позволяет пользователю добавлять и удалять задачи из списка
        </p>

        {task.map((el, i) => {
            return (<>
                <p key={i}>{el}</p>
                <button id={el} onClick={(e) => setTask(task.filter(el => el != e.target.id))}>DELETE TASK</button>
            </>)
        })}

        <input type="text" onChange={(e) => setInp(e.target.value)} />
        <button onClick={() => setTask([...task, inp])}>ADD TASK</button>


        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task51