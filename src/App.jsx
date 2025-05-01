import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from './Pages/Home';
import Game from './Pages/Game';
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Contact from './Pages/Contact';
import AboutDyslexia from './Pages/AboutDyslexia';
import Consequences from './Pages/Consequences';
import Symptoms from './Pages/Symptoms';
import Tips from './Pages/Tips';
import Recovery from './Pages/Recovery'; 
import About from './Pages/About';       

import Boy from './components/Boy';
import Girl from './components/Girl';
import LandingPage from './components/LandingPage';

const App = () => {
  const [gender, setGender] = useState(null); // null, 'boy', or 'girl'

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage />} />
  <Route path="/boy" element={<Boy />} />
  <Route path="/girl" element={<Girl />} />

  <Route path="/About" element={<About />} />
  <Route path="/Games" element={<Game />} />
  <Route path="/SignUp" element={<SignUp />} />
  <Route path="/Login" element={<Login />} />
  <Route path="/Contact" element={<Contact />} />
  <Route path="/AboutDyslexia" element={<AboutDyslexia />} />
  <Route path="/Symptoms" element={<Symptoms />} />
  <Route path="/Recovery" element={<Recovery />} />
  <Route path="/Consequences" element={<Consequences />} />
  <Route path="/Tips" element={<Tips />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
