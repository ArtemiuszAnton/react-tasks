import { Link } from "react-router-dom";

function Home() {
    return <>
    <h1>React tasks</h1>

    <p><Link to = {'/task001'}>Перейти к задаче 001</Link></p>
    <p><Link to = {'/task002'}>Перейти к задаче 002</Link></p>
    <p><Link to = {'/task003'}>Перейти к задаче 003</Link></p>
    <p><Link to = {'/task004'}>Перейти к задаче 004</Link></p>
    <p><Link to = {'/task005'}>Перейти к задаче 005</Link></p>
    <p><Link to = {'/task006'}>Перейти к задаче 006</Link></p>
    </>
}

export default Home;