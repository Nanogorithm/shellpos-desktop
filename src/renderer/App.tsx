import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Card } from 'flowbite-react';

function Hello() {
  return (
    <div className="max-w-sm">
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
