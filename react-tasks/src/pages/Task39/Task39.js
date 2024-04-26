import { Link } from "react-router-dom";
import { useState } from "react";

function Task39() {

    const [arr, setArr] = useState(['fdfd', 'fddffd', 'fdfddf']);
    const [data, setData] = useState('');

    const removeItem = (e) => {
        const arrDelete = arr.filter(el => el != e.target.id);
        setArr(arrDelete);
    }

    return <>
        <input type="text" value={data} onChange={e => setData(e.target.value)} />
        <button onClick={() => {
            setArr([...arr, data])
            setData('');
        }}>Click</button>
        <p>{arr.map(el => <p>{el}<button id={el} onClick={removeItem}>DELETE</button></p>)}</p>


        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}

export default Task39