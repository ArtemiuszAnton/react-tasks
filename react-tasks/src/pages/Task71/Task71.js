import { useMemo, useState } from "react";
import { Link } from "react-router-dom";


function Task71() {

    const [inp, setInp] = useState('');

    const reverse = () => inp.split('').reverse().join('')

    const res = useMemo(() => reverse(), [inp])

    return <>
        <p>
            4. Напишите программу, которая принимает строку от пользователя и выводит ее в
            обратном порядке. Используй хук useState для хранения строки и хук useMemo
            для кэширования результата.
        </p>

        <input type="text" onChange={(e) => setInp(e.target.value)} />
        <p>{res}</p>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task71