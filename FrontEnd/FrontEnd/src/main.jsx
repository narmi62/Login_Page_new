import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Dashboard from './component/Dashboard.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/dashboard' element={<Dashboard />} />

    </Routes>
  </BrowserRouter>
)

