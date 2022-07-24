import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Issue from './pages/Issue';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/issue" element={<Issue />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
