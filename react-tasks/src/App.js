import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Task001 from './pages/Task001/Task001';
import Task002 from './pages/Task002/Task002';
import Task003 from './pages/Task003/Task003';
import Task004 from './pages/Task004/Task004';
import Task005 from './pages/Task005/Task005';
import Task006 from './pages/Task006/Task006';
import Task1 from './pages/Task1/Task1';
import Task2 from './pages/Task2/Task2';
import Task3 from './pages/Task3/Task3';
import Task4 from './pages/Task4/Task4';
import Task5 from './pages/Task5/Task5';
import Task6 from './pages/Task6/Task6';
import Task7 from './pages/Task7/Task7';
import Task8 from './pages/Task8/Task8';
import Task9 from './pages/Task9/Task9';
import Task10 from './pages/Task10/Task10';
import Task11 from './pages/Task11/Task11';
import Task12 from './pages/Task12/Task12';
import Task13 from './pages/Task13/Task13';
import Task14 from './pages/Task14/Task14';
import Task15 from './pages/Task15/Task15';
import Task16 from './pages/Task16/Task16';
import Task17 from './pages/Task17/Task17';
import Task18 from './pages/Task18/Task18';
import Task19 from './pages/Task19/Task19';
import Task20 from './pages/Task20/Task20';
import Task21 from './pages/Task21/Task21';
import Task22 from './pages/Task22/Task22';
import Task23 from './pages/Task23/Task23';
import Task24 from './pages/Task24/Task24';
import Task30 from './pages/Task30/Task30';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/task001' element={<Task001 />} />
        <Route path='/task002' element={<Task002 />} />
        <Route path='/task003' element={<Task003 />} />
        <Route path='/task004' element={<Task004 />} />
        <Route path='/task005' element={<Task005 />} />
        <Route path='/task006' element={<Task006 />} />
        <Route path='/task1' element={<Task1 />} />
        <Route path='/task2' element={<Task2 />} />
        <Route path='/task3' element={<Task3 />} />
        <Route path='/task4' element={<Task4 />} />
        <Route path='/task5' element={<Task5 />} />
        <Route path='/task6' element={<Task6 />} />
        <Route path='/task7' element={<Task7 />} />
        <Route path='/task8' element={<Task8 />} />
        <Route path='/task9' element={<Task9 />} />
        <Route path='/task10' element={<Task10 />} />
        <Route path='/task11' element={<Task11 />} />
        <Route path='/task12' element={<Task12 />} />
        <Route path='/task13' element={<Task13 />} />
        <Route path='/task14' element={<Task14 />} />
        <Route path='/task15' element={<Task15 />} />
        <Route path='/task16' element={<Task16 />} />
        <Route path='/task17' element={<Task17 />} />
        <Route path='/task18' element={<Task18 />} />
        <Route path='/task19' element={<Task19 />} />
        <Route path='/task20' element={<Task20 />} />
        <Route path='/task21' element={<Task21 />} />
        <Route path='/task22' element={<Task22 />} />
        <Route path='/task23' element={<Task23 />} />
        <Route path='/task24' element={<Task24 />} />
        <Route path='/task30' element={<Task30 />} />
      </Routes>
    </div>
  );
}

export default App;
