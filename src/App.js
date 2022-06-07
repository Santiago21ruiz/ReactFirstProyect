import React from "react";
import { Route, Routes } from 'react-router-dom';
import { HeaderHome } from "./components/Layouts/HeaderHome/HeaderHome";
import { Tenor } from "./components/pages/Tenor/Tenor";
import { RickAndMorty } from "./components/pages/RickAndMorty/RickAndMorty";
import { ContactUS } from "./components/pages/ContactUS/ContactUS";
import { Counter } from "./components/pages/Counter/Counter";
import { CounterTen } from "./components/pages/CounterTen/CounterTen";
import { Home } from "./components/pages/Home/Home";
import { NotFound } from "./components/pages/NotFound/NouFound"; 


function App() {
  return (
    <div>
      <HeaderHome />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Tenor' element={<Tenor />} />
        <Route path='/ContactUS' element={<ContactUS />} />
        <Route path='/RickAndMorty' element={<RickAndMorty />} />
        <Route path='/Counter' element={<Counter />} />
        <Route path='/CounterTen' element={<CounterTen />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;
