import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Project from './pages/Project';
import Versiondata from './pages/Versiondata';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project" element={<Project />} />
          <Route path="/versiondata" element={<Versiondata />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
