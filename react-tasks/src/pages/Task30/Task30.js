import { useState, useEffect } from "react"

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
//     </>
// }


// export default Task30


function Task30() {
    const [ip, setIp] = useState('');

    const getIp = async () => {
        const response = await fetch('https://api.ipify.org/?format=json', { method: 'GET' })

        const parsedData = await response.json();
        setIp(parsedData)
    }

    useEffect(() => {
        getIp()
    }, [])

    return <>
        <h1>{ip.ip}</h1>
    </>
}


export default Task30