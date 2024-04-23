import img from './assets/Vector.svg';
import { Link } from 'react-router-dom';

function Task4() {
    const arr = ['asasa', 'dssdsd', 'sddssd'].map((el) =>

     {return <div div><p>{el}</p><img src={img} /></div> });

    return <div>
        <p>
            4. На входе статичный массив строк. Ваша задача отобразить на странице все строки
            массива, а также картинку. Каждая итерация будет возвращать
        </p>
        {arr}

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </div>
}


export default Task4