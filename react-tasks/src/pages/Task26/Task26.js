function Task20() {

    const arr = ['FIRST ELEM', 'SECOND ELEM', 'THIRD ELEM', 'FOURTH ELEM'];

    function randomElem() {
        console.log(arr[Math.floor(Math.random() * arr.length)]);
    }

    return <>
        <p>
            6. Создайте компонент с массивом элементов и кнопкой.При каждом клике на
            кнопку выбирайте случайный элемент из массива и отображайте его в консоль.
        </p>

        <button onClick={randomElem}>КЛАЦ</button>
    </>
}


export default Task20