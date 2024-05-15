import { useRef } from "react";
import { Link } from "react-router-dom";


function Task65() {

    const h_3 = useRef();

    return <>
        <p>
            4. Создайте компонент, который при фокусе на текстовом поле добавляет
            background (onFocus, onBlur)
        </p>

        <input type="text" ref={h_3}
            onFocus={() => h_3.current.style.background = 'blue'}
            onBlur={() => h_3.current.style.background = 'white'}
        />
        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task65