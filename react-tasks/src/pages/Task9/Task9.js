function Task9() {

    const arr = ['qwerty', 'qwertyuiop', 'wqwq', 'qwertyuiopasdfg', 'razdwatriaaa', 'gg'].filter(el => el.length <= 10);


    return <div>
        <p>

            3. Создайте компонент, который принимает массив строк и фильтрует строки,
            оставляя только те, длина которых не превышает 10 символов.

        </p>
        {arr}
    </div>
}


export default Task9