import React, { FC, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Page/Main';
import { timerStatus } from './types/types';
import TestPage from './Page/ReversTime';
import Layout from './components/Layout';


const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/revers-timer" element={<TestPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
