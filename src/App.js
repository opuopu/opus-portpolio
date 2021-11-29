import logo from './logo.svg';
import './App.css';

// import {  } from 'react-router';
import Home from './pages/home/Home';

import {
  BrowserRouter,
  Routes,
Route

} from "react-router-dom";


import Contact from './pages/contact/Contact';
import Projects from './pages/projects/Projects'




function App() {
  return (
    <BrowserRouter>
   
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
