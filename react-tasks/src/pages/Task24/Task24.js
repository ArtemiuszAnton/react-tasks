import { useState } from "react"
import { Link } from "react-router-dom";


function Task24() {


    const [inp, setInp] = useState('');
    const [inp2, setInp2] = useState('');

    const getInp = (e) => setInp(e.target.value);
    const getInp2 = (e) => setInp2(e.target.value);

    const theyIdentical = () => console.log(inp == inp2 ? true : false);

    return <>
        <p>
            4. Создайте компонент с 2 полями ввода и кнопкой.По клику на кнопку собрать
            данные из двух input(2 разных state).Сравнить значения 2 input на равенство.
            Результат отображать в консоль
        </p>
        <input onChange={getInp} type="text" />
        <input onChange={getInp2} type="text" />
        <button onClick={theyIdentical}>КЛАЦ</button>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/home'}>Вернуться на главную</Link></button >
    </>
}


export default Task24