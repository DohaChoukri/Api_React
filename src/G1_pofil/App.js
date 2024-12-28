import React from 'react';
import { Routes, Route } from 'react-router-dom';
import React_api from './React_API';
import Postuser from './Postuser';

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<React_api />} />
          <Route path="/Postuser/:id" element={<Postuser />} />
      </Routes>
    </>
  );
}

export default App;