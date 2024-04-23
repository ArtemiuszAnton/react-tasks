import { Link } from "react-router-dom";


function Task17() {

    function inpPalindrome(e) {
        if (e.target.value === e.target.value.split('').reverse().join('')) console.log(true);
        else console.log(false);
    }

    return <>
        <p>

            3. По нажатию на enter в input onKeyDown выявлять является ли введенное слово
            палиндромом. Результат проверки отобразить в консоль
        </p>

        <input type="text" onKeyDown={inpPalindrome} />

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task17