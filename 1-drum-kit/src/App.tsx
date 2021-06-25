import React from 'react';
import { useState } from 'react';
import './App.css';

import Key from './util/Key';

const App = () => {
  const [keys, setKeys] = useState([
    { keyNumber: 65, letter: 'A', sound: 'clap', isPlaying: false },
    { keyNumber: 83, letter: 'S', sound: 'hihat', isPlaying: false },
    { keyNumber: 68, letter: 'D', sound: 'kick', isPlaying: false },
    { keyNumber: 70, letter: 'F', sound: 'openhat', isPlaying: false },
    { keyNumber: 71, letter: 'G', sound: 'boom', isPlaying: false },
    { keyNumber: 72, letter: 'H', sound: 'ride', isPlaying: false },
    { keyNumber: 74, letter: 'J', sound: 'snare', isPlaying: false },
    { keyNumber: 75, letter: 'K', sound: 'tom', isPlaying: false },
    { keyNumber: 76, letter: 'L', sound: 'tink', isPlaying: false }
  ])
  
  const playSound = (id: number) => {
    setKeys(keys.map(key => {
      if (key.keyNumber === id) {
        key.isPlaying = true;
      }

      return key;
    }));
  }

  const stopSound = (id: number) => setKeys(keys.map(key => key.keyNumber === id ? { ...key, isPlaying: false } : key))

  const toggleSound = (id: number) => {
    const key = keys.find(key => key.keyNumber === id);
    key?.isPlaying ? stopSound(id) : playSound(id);
  }

  return (
    <div className="keys">
      { keys.map(key => (
        <Key key={key.keyNumber} keyNumber={key.keyNumber} letter={key.letter} sound={key.sound} isPlaying={key.isPlaying} toggleSound={toggleSound} />
      ))}
    </div>
  );
}

export default App;