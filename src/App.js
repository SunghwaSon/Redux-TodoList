import React from 'react';
import { Route, Routes }from "react-router-dom"
import Home from './pages/Home';
import Detail from './pages/Detail'

function App() {
  return (
    <Routes>
      <Route path="/" element = {<Home />} /> 
      <Route path="/detail/:id" element = {<Detail />} />
      {/* 다이나믹 라우팅 */}
    </Routes>
  );
}

export default App;