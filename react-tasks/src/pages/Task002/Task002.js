import { useState } from "react";
import { Link } from "react-router-dom";


function Task002() {

    const [flag, setFlag] = useState(false);

    function show() {
        setFlag(!flag ? true : false);

    }

    return <>
        <p>2. Напишите компонент, включающий в себя выезжающее меню
            из трех параграфов. По нажатию на кнопку "Открыть" меню
            должно отображаться.</p>
        {flag ? <div>
            <p>Raz</p>
            <p>Dwa</p>
            <p>Tri</p>
        </div> : null}
        <button onClick={show}>Open</button>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>


}


export default Task002