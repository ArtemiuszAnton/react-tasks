function Task12() {

    const arr = [1, 2, 4, 4, 5, 'ee', 'yy', '3'].map((el) => typeof el === 'number' ?
        <p style={{ color: "green" }}>{el}</p> : <p style={{ color: "blue" }}>{el}</p>);


    return <div>
        <p>
            4. Создайте компонент, который принимает статичный массив чисел и строк. Если
            элемент - число, то отобразите его в параграфе с зеленым цветом текста, если
            строка - с синим.

        </p>
        {arr}
    </div>
}


export default Task12