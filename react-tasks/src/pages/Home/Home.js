import { Link } from "react-router-dom";

function Home() {
    return <>
        <h1 style={{ color: '#7b0bb8bc', textAlign: 'center' }}>React tasks</h1 >

        <h4 style={{ display: 'block', textAlign: 'center' }}>Задачи на JSX</h4>
        <div style={{ display: "grid", gridTemplateColumns: 'repeat(3, 1fr)', gap: 15 }}>
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task1'}>Перейти к задаче 1</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task2'}>Перейти к задаче 2</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task3'}>Перейти к задаче 3</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task4'}>Перейти к задаче 4</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task5'}>Перейти к задаче 5</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task6'}>Перейти к задаче 6</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task7'}>Перейти к задаче 7</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task8'}>Перейти к задаче 8</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task9'}>Перейти к задаче 9</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task10'}>Перейти к задаче 10</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task11'}>Перейти к задаче 11</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task12'}>Перейти к задаче 12</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task13'}>Перейти к задаче 13</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task14'}>Перейти к задаче 14</Link></button >
        </div>

        <h4 style={{ display: 'block', textAlign: 'center' }}>Задачи c Event</h4>
        <div style={{ display: "grid", gridTemplateColumns: 'repeat(3, 1fr)', gap: 15 }}>
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task15'}>Перейти к задаче 15</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task16'}>Перейти к задаче 16</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task17'}>Перейти к задаче 17</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task18'}>Перейти к задаче 18</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task19'}>Перейти к задаче 19</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task20'}>Перейти к задаче 20</Link></button >
        </div>

        <h4 style={{ display: 'block', textAlign: 'center' }}>Задачи c useState</h4>
        <div style={{ display: "grid", gridTemplateColumns: 'repeat(3, 1fr)', gap: 15 }}>
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task21'}>Перейти к задаче 21</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task22'}>Перейти к задаче 22</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task23'}>Перейти к задаче 23</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task24'}>Перейти к задаче 24</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task25'}>Перейти к задаче 25</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task26'}>Перейти к задаче 26</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task27'}>Перейти к задаче 27</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task28'}>Перейти к задаче 28</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task29'}>Перейти к задаче 29</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task30'}>Перейти к задаче 30</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}> <Link to={'/task001'}>Перейти к задаче 001</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }} ><Link to={'/task002'}>Перейти к задаче 002</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }} ><Link to={'/task003'}>Перейти к задаче 003</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}><Link to={'/task004'}>Перейти к задаче 004</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}><Link to={'/task005'}>Перейти к задаче 005</Link></button >
            <button style={{ background: 'pink', display: 'block', marginTop: 5, borderRadius: 4, padding: 5 }}><Link to={'/task006'}>Перейти к задаче 006</Link></button >
        </div>


    </>
}

export default Home;