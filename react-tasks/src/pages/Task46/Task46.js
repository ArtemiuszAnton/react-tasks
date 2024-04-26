import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Task46() {

    const [flag, setFlag] = useState(false);


    const getFlag = () => !flag ? setFlag(true) : setFlag(false);


    return <>

        <p>6. Реализовать селектор, где по клику на копку
            отображается 3 параграфа. При
            повторном клике параграфы скрываются.
        </p>




        <button onClick={getFlag}></button>


        {!flag ? <div>
            <p>Raz</p>
            <p>Dwa</p>
            <p>Tri</p>
        </div> : ''}



        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task46