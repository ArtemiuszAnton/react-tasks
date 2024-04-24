import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Task30() {

    const [form, setForm] = useState({
        name: '',
        surname: '',
    });

    const getName = (e) => setForm({ ...form, [e.target.id]: e.target.value })

    const showName = () => form

    return <>
        <p>10. По клику на кнопку собрать данные из двух input: name, surname. Работать с 1
            state, первоначальное значение которого [name: ‘’, surname: ‘’]. Проверить
            значения 2 input на пустоту. Структура state:</p>

        <input id="name" type="text" placeholder="name" onChange={getName} />
        <input id="surname" type="text" placeholder="surname" onChange={getName} />
        <button onClick={showName}>Show name</button>
        <p>{form.name} {form.surname}</p>


        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


// function Task30() {

//     const [arr, setArr] = useState(['fdfd', 'fddffd', 'fdfddf']);
//     const [data, setData] = useState('');

//     const removeItem = (e) => {
//         const arrDelete = arr.filter(el => el != e.target.id);
//         setArr(arrDelete);
//     }

//     return <>
//         <input type="text" value={data} onChange={e => setData(e.target.value)} />
//         <button onClick={() => {
//             setArr([...arr, data])
//             setData('')
//         }}>Click</button>
//         <p>{arr.map(el => <p>{el}<button id={el} onClick={removeItem}>DELETE</button></p>)}</p>

//         <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

//     </>
// }


// export default Task30


// function Task30() {
//     const [ip, setIp] = useState('');

//     const getIp = async () => {
//         const response = await fetch('https://api.ipify.org/?format=json', { method: 'GET' })

//         const parsedData = await response.json();
//         setIp(parsedData)
//     }

//     useEffect(() => {
//         getIp()
//     }, [])

//     return <>
//         <h1>{ip.ip}</h1>
//     </>
// }

export default Task30