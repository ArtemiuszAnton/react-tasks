import axios from "axios";
import { useEffect, useMemo, useReducer, useRef, useState } from "react";
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


// const reducer = (state, data) => {
//     switch (data.action) {
//         case 'addNewTask':
//             return [...state, data.newValue]
//         case 'removeTask':
//             return state.filter(el => el != data.event.target.id)
//         default:
//             break;
//     }
// }

// function Task92() {

//     const [task, dispatch] = useReducer(reducer, ['raz', 'dwa', 'trzy', 'cztery']);
//     const newTask = useRef();

//     return <>
//         <p>
//             6. Список задач с использованием useReducer: Создайте компонент списка задач,
//             который позволяет пользователю добавлять и удалять задачи из списка.
//         </p>

//         {task.map((el, i) =>
//             <p key={i}>
//                 {el}
//                 <button onClick={(e) => dispatch({ action: 'removeTask', event: e })} id={el}>del</button>
//             </p>
//         )}

//         <input type="text" ref={newTask} />
//         <button onClick={(e) => dispatch({ action: 'addNewTask', newValue: newTask.current.value })}>add task</button>

//         <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

//     </>
// }


// function Task92() {

//     const [ip, setIp] = useState('');

//     const getIp = async () => {
//         const response = await axios.get('https://api.ipify.org/?format=json');
//         setIp(response.data.ip)
//     }

//     useEffect(() => {
//         getIp()
//     }, [])

//     return <div>

//         <p>{ip}</p>

//     </div>
// }

// function Task92() {

//     const h1 = useRef();

//     return <div>
//         <h1 ref={h1}>text</h1>
//         <button onClick={() => h1.current.style.color = `#${Math.floor(Math.random() * 999)}`}>click</button>
//     </div>
// }


// export default Task92
function Task92() {

    const [inp, setInp] = useState(1);

    const sumInpValue = () => {
    
    }

    const result = useMemo(() => {
        sumInpValue()
    }, [inp])

    return <div>
        <p>
            Создайте компонент, который включает в себя текстовое поле для ввода числа.
            Когда пользователь вводит число, компонент должен вычислить
            сумму всех чисел от 1 до введенного числа (включительно) с
            использованием хука useMemo для оптимизации производительности.
        </p>

        <input type="text" onChange={(e) => setInp(+e.target.value)} />
        <p>{result}</p>
    </div>
}


export default Task92