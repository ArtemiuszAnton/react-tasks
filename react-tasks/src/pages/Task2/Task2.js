function Task2() {

    const arr = [144, 4, 9, 112].map(el=>Math.sqrt(el))
    return <div>
        <p>2. На входе статичный массив чисел. Ваша задача найти корень каждого числа и
            отобразить на странице в виде h1
        </p>
        {arr}
    </div>
}

export default Task2