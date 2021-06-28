import {useEffect, useRef} from 'react';

interface KeyProps {
    isPlaying: boolean,
    letter: string,
    toggleSound: Function,
    sound: string
}

const Key:React.FC<KeyProps> = ({ isPlaying, letter, toggleSound, sound }) => {
    const savedSound = useRef<string>(sound);
    const savedAudio = useRef<HTMLAudioElement>(new Audio(`sounds/${sound}.wav`));
 
    useEffect(() => {
        if (savedSound.current !== sound) {
            savedAudio.current = new Audio(`sounds/${sound}.wav`);
            savedSound.current = sound;
        }
      }, [sound]);
 
    if (isPlaying) {
        savedAudio?.current?.play();
    } else {
        savedAudio.current.pause();
        savedAudio.current.currentTime = 0;
    }
    
    return (
    <div data-key={letter} className={`key ${isPlaying ? 'playing' : ''}`} onClick={() => toggleSound(letter)} >
        <kbd>{letter}</kbd>
        <span className="sound">{sound}</span>
        <audio src="sounds/{sound}.wav" preload="auto"></audio>
    </div>
    )
}

export default Key;