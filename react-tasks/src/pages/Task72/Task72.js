import axios from "axios";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";


function Task72() {

    const [ip, setIp] = useState();

    const getIp = async () => {
        const response = await axios.get('https://api.ipify.org/?format=json');
        setIp(response.data.ip)
    }

    useMemo(async () => await getIp(), [ip])

    return <>
        <p>
            5. Реализуйте компонент, который отображает IP-адрес пользователя. IP-адрес
            должен быть получен с использованием useMemo при монтировании
            компонента и кэширован для избегания повторных запросов к API при
            обновлении других частей компонента. https://api.ipify.org/?format=json
        </p>

        <p>{ip}</p>

        <button style={{ background: 'pink', display: 'block', marginTop: 30, borderRadius: 4 }}><Link to={'/'}>Вернуться на главную</Link></button >

    </>
}


export default Task72