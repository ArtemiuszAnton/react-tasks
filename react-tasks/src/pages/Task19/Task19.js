import { Link } from "react-router-dom";


function Task19() {

    const arr = [12, 343, 5, 67, 8, 89, 7];

    function sumArray() {
        console.log(arr.reduce((sum, el) => sum + el, 0));
    }

    return <div>
        <p>
            5. Реализуйте компонент с массивом чисел и кнопкой. При клике на кнопку
            вычислите и выведите сумму всех чисел из массива в консоль.
        </p>

        <button onClick={sumArray}>КЛАЦ</button>
        
        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </div>
}


export default Task19