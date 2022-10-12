import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/index';
import Home from './Components/Home';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

    </div>
  );
};

export default App;