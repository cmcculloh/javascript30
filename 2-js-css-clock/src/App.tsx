import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import { rootCertificates } from 'tls';

import Hand from './Hand';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="clock">
      <div className="clock-face">
        <Hand type="hour" multiplier={30} time={time.getHours()} length={30} width={10}/>
        <Hand type="minute" multiplier={6} time={time.getMinutes()} length={45} width={6}/>
        <Hand type="second" multiplier={6} time={time.getSeconds()} length={50} width={2}/>
      </div>
    </div>
  );
}

export default App;
