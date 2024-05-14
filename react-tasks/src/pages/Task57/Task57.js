import { useState } from "react";
import { Link } from "react-router-dom";

function Task57() {

    const [flag, setFlag] = useState(false);

    return <>
        <p>
            8. Отображение навигации с использованием useState: По нажатию на кнопку
            “бургер” отображать блок навигации из 4 параграфов.
        </p>

        <button onClick={() => setFlag(!flag ? true : false)}>|||</button>

        {flag ?
            <div>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
            </div>
            :<p></p>}
        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task57