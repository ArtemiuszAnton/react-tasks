import { Link } from "react-router-dom";


function Task16() {

    const inpValue = (event) => {
        console.log(event.target.value);
    };

    return <div>
        <p>
            2. По событию изменения input отображать в
            консоль каждое вводимое значение
        </p>

        <input type="text" onChange={inpValue} />

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </div>
}


export default Task16