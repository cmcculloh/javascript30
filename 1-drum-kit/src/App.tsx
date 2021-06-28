import React, { useEffect, useRef, useState } from "react";
import './App.css';

import Key from './util/Key';

const useEventListener = (eventName: string, handler: Function, element = document) => {
  const savedHandler = useRef<Function>(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Object is a KeyboardEvent, but when I set it to that instead Typescript errors out on the addEventListener...
    const eventListener = (event: Object) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};

const App = () => {
  const keyUpHandler = ({ key }: { key: string }) => {
    stopSound(key.toUpperCase());
  };

  useEventListener("keyup", keyUpHandler); 

  const keyDownHandler = ({ key }: { key: string }) => {
    playSound(key.toUpperCase());
  };

  useEventListener("keydown", keyDownHandler); 

  const [keys, setKeys] = useState([
    { letter: 'A', sound: 'clap', isPlaying: false },
    { letter: 'S', sound: 'hihat', isPlaying: false },
    { letter: 'D', sound: 'kick', isPlaying: false },
    { letter: 'F', sound: 'openhat', isPlaying: false },
    { letter: 'G', sound: 'boom', isPlaying: false },
    { letter: 'H', sound: 'ride', isPlaying: false },
    { letter: 'J', sound: 'snare', isPlaying: false },
    { letter: 'K', sound: 'tom', isPlaying: false },
    { letter: 'L', sound: 'tink', isPlaying: false }
  ])
  
  const playSound = (letter: string) => {
    setKeys(keys.map(key => {
      if (key.letter === letter) {
        key.isPlaying = true;
      }

      return key;
    }));
  }

  const stopSound = (letter: string) => setKeys(keys.map(key => key.letter === letter ? { ...key, isPlaying: false } : key))

  const toggleSound = (letter: string) => {
    const key = keys.find(key => key.letter === letter);
    key?.isPlaying ? stopSound(letter) : playSound(letter);
  }

  return (
    <div className="keys">
      { keys.map(key => (
        <Key key={key.letter} letter={key.letter} sound={key.sound} isPlaying={key.isPlaying} toggleSound={toggleSound} />
      ))}
    </div>
  );
}

export default App;