import { useState } from "react"
import { Link } from "react-router-dom";


function Task22() {

    const [inp, setInp] = useState('');

    const getInp = (e) => setInp(e.target.value);

    const isPalindrom = () => {
        inp.split('').reverse().join('') == inp ?
            console.log(true) : console.log(false)
    }

    return <>
        <p>
            2. Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать
            данные из input и проверить вводимую строку на палиндром. Результат
            отображать в консоль
        </p>

        <input onChange={getInp} type="text" />
        <button onClick={isPalindrom}>КЛАЦ</button>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task22