import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';



function Task58() {

    const [inp, setInp] = useState('');
    const [answer, setAnswer] = useState('');

    const getAnswer = async () => {
        const response = await axios.get('https://yesno.wtf/api');
        setAnswer(response.data.answer);
    }

    return <>
        <p>
            9. Форма с отправкой запроса к API с использованием useState: Создайте
            компонент, который предоставляет input, button. После ввода данных в input по
            нажатию кнопку необходимо отправлять асинхронный запрос к API
            https://yesno.wtf/api с получением рандомно сгенерированного “да/нет”.
            Отобразить результат в заголовок. Таким образом у вас получается игра в
            предсказателя: где пользователь вводит вопрос в input, а далее получает ответ на
            заданный вопрос.
        </p>

        <input type="text" placeholder="Ask your question" onChange={(e) => setInp(e.target.value)} />
        <button onClick={getAnswer}>Get an answer</button>

        <h3>{inp}</h3>
        <h4>{answer}</h4>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task58