import { useState } from "react"
import { Link } from "react-router-dom";


function Task23() {

    const [inp, setInp] = useState('');

    const getInp = (e) => setInp(e.target.value);

    const isEmail = () => console.log(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/gm.test(inp) ? true : false);


    return <>
        <p>
            3. Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать
            данные из input и проверить вводимую строку на почту. Результат отображать в
            консоль
        </p>

        <input onChange={getInp} type="text" />
        <button onClick={isEmail}>КЛАЦ</button>
        
        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task23