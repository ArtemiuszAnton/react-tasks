import draniki from '../Task11/assets/draniki.jpg';
import pelmeni from './assets/pelmeni.webp';
import kebab from './assets/kebab.png';

function Task11() {

    const arr = [{ title: 'draniki', description: 'potato grated', image: draniki },
    { title: 'pelmeni', description: 'Believers in the dough welded', image: pelmeni },
    { title: 'kebab', description: 'meat with vegetables in Lavash', image: kebab }].map(el => {
        return <div>
            <h1>{el.title}</h1>
            <h5>{el.description}</h5>
            <img src={el.image} />
        </div>
    });



    return <>
        <p>
            5. Реализуйте компонент, который принимает массив объектов с полями title –
            название рецепта, description – описание рецепта и image – картинка блюда. Для
            каждого объекта создайте карточку с заголовком, описанием и изображением.
            Добавьте немного стилей

        </p>

        {arr}
    </>
}


export default Task11