
import React from "react";
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

import Hero from './Component/Hero';
import Navbar from "./Component/Navbar";
import Mobile from "./Component/Mobile";
import Woman from "./Component/Woman";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Hero/>}></Route>
      <Route path='/' element={<Navbar/>}></Route>
      <Route path='/' element={<Mobile/>}></Route>
      <Route path='/' element={<Woman/>}></Route>

      </Routes>
      </BrowserRouter>
      




    </div>
  );
}

export default App;
