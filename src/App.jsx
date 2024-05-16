import React from 'react';
import './styles/tailwind.css';
import Main from './component/Main';
import Home from './component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter >
          <Routes>
          <Route path="api" element={<Home />}>
              <Route index element={<Main/>} />
              <Route path="alerts" element={<Main/>}/> 
              <Route path="statistics" element={<Main/>}/> 
          </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;

