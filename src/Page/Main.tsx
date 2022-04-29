import React, { FC, useState } from 'react';
import Header from '../components/Header/Header';
import Timer from '../components/Timer/Timer';
import { timerStatus } from '../types/types';

interface ITimer {

}

const Main: FC = () => {
  
  
  return (
    <div className="App">
      <Timer />
    </div>
  );
}

export default Main;
