import img from './assets/Vector.svg';

function Task4() {
    const arr = ['asasa', 'dssdsd', 'sddssd'].map((el) =>

     {return <div div><p>{el}</p><img src={img} /></div> });

    return <div>
        <p>
            4. На входе статичный массив строк. Ваша задача отобразить на странице все строки
            массива, а также картинку. Каждая итерация будет возвращать
        </p>
        {arr}
    </div>
}


export default Task4