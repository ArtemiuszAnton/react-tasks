import { Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <div >
      <Routes>
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
      </Routes>
    </div>
  );
}

export default App;