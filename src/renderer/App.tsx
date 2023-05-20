import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Card } from 'flowbite-react';
import Pos from './Pages/POS/Pos';

function Hello() {
  return (
    <div className="max-w-sm">
      <Pos></Pos>
      <h1 className='text-sm text-slate-500'>Hello World</h1>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
