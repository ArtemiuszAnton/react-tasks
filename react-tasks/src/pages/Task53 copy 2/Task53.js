import { useState } from "react";
import { Link } from "react-router-dom";


function Task53() {

    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [result, setResult] = useState(0);
    const [mathStr, setMathStr] = useState('');

    const getMathStr = (e) => setMathStr(mathStr + e.target.textContent)

    const getResult = () => setResult(eval(mathStr));

    return <>
        <p>
            6. Создайте компонент простого калькулятора, который выполняет команды: +, -, *, /
        </p>

        <h1>{mathStr}={result}</h1>

        <div> {nums.map((el, i) => <button onClick={getMathStr} key={i}>{el}</button>)}</div>

        <button onClick={getMathStr}>+</button>
        <button onClick={getMathStr}>-</button>
        <button onClick={getMathStr}>*</button>
        <button onClick={getMathStr}>/</button>

        <button onClick={getResult}>Посчитать</button>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task53