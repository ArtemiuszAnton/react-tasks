function Task14() {

    const uniqArr = [];
    const arr = [1, 1, 2, 3, 5, 6, 4, 2, 4, 5, 5, 6, 6, 7, 0].map(el => !uniqArr.includes(el) ? uniqArr.push(el) : false)

    return <>
        <p>
            8. Реализуйте компонент, который принимает статичный массив и отображает
            только уникальные значения, убирая повторяющиеся.
            Задания с Event:
        </p>
        {uniqArr}
    </>
}


export default Task14