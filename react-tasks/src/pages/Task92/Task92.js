import { useReducer, useRef, useState } from "react";
import { Link } from "react-router-dom";


// function Task92() {

//     const [task, setTask] = useState(['raz', 'dwa', 'trzy', 'cztery']);
//     const newTask = useRef();

//     const getTask = () => setTask([...task, newTask.current.value])

//     const deleteTask = (e) => setTask(task.filter(el => el != e.target.id))
//     return <>
//         <p>
//             6. Список задач с использованием useReducer: Создайте компонент списка задач,
//             который позволяет пользователю добавлять и удалять задачи из списка.
//         </p>

//         {task.map((el, i) =>
//             <p key={i}>
//                 {el}
//                 <button onClick={deleteTask} id={el}>del</button>
//             </p>
//         )}

//         <input type="text" ref={newTask} />
//         <button onClick={getTask}>add task</button>

//         <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

//     </>
// }


const reducer = (state, data) => {
    switch (data.action) {
        case 'addNewTask':
            return [...state, data.newValue]
        case 'removeTask':
            return state.filter(el => el != data.event.target.id)
        default:
            break;
    }
}

function Task92() {

    const [task, dispatch] = useReducer(reducer, ['raz', 'dwa', 'trzy', 'cztery']);
    const newTask = useRef();

    return <>
        <p>
            6. Список задач с использованием useReducer: Создайте компонент списка задач,
            который позволяет пользователю добавлять и удалять задачи из списка.
        </p>

        {task.map((el, i) =>
            <p key={i}>
                {el}
                <button onClick={(e) => dispatch({ action: 'removeTask', event: e })} id={el}>del</button>
            </p>
        )}

        <input type="text" ref={newTask} />
        <button onClick={(e) => dispatch({ action: 'addNewTask', newValue: newTask.current.value })}>add task</button>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task92