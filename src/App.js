import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './AllPage/Home'
import Card from './AllPage/Card'
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <div className="bg-slate-900">
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/card' element={<Card/>}/>
      </Routes >
    </div>
  );
}

export default App;
