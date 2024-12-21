import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './rout/home';
import About from './rout/about';
import Blog from './rout/blog';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  );
}

export default App;