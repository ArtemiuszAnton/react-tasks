import { Link } from "react-router-dom";


function Task6() {
    const arr = [{ title: 'joker', description: 'triller' }, { title: 'avatar', description: 'fantastic' }].map((el) =>
        <div>
            <h1>{el.title}</h1>
            <p>{el.description}</p>
        </div>
    );


    return <div>
        <p>
            6. На входе массив из объектов. каждый объект содержит title с названием фильма и
            description с кратким описанием фильма. В h1 отобразить каждый title, в p -
            description

        </p>
        {arr}

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </div>
}


export default Task6