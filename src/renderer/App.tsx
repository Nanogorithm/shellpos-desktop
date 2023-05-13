import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function Hello() {
  return (
    <h1 className="text-3xl font-bold underline text-blue-600">
      Hello world!
    </h1>
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
