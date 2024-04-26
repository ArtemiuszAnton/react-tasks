import { useState } from "react";
import { Link } from "react-router-dom";


function Task35() {
    const [input, setInput] = useState({ name: '', surname: '', pwd: '' });

    function showInpValue(e) {
        setInput({ ...input, [e.target.id]: e.target.value });
    }



    return <>
        <p>
            5. Напишите компонент, который будет получать значения из двух
            полей ввода (input) и выводить их в консоль по нажатию на кнопку.
            Используйте для этого только один useState.
        </p>


        <input type="text" id="name" onChange={showInpValue} />
        <input type="text" id="surname" onChange={showInpValue} />
        <input type="text" id="pwd" onChange={showInpValue} />
        <button onClick={()=>{console.log(input);}}>click</button>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task35