import { useState } from "react";
import { Link } from "react-router-dom";


function Task25() {

    const [inp, setInp] = useState('');

    const getInp = (e) => setInp(e.target.value);

    const greetings = () => alert(`Привет ${inp}!`);

    return <div>
        <p>
            5. Создайте компонент с полем ввода имени и кнопкой "Привет". При вводе имени в
            поле и нажатии на кнопку, компонент должен отображать приветственное
            сообщение с именем, введенным пользователем
        </p>

        <input onChange={getInp} type="text" placeholder="Введите имя" />
        <button onClick={greetings}>Привет</button>
        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </div>
}


export default Task25