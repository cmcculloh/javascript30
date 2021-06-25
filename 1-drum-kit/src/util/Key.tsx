interface KeyProps {
    isPlaying: boolean,
    keyNumber: number,
    letter: string,
    toggleSound: Function,
    sound: string
}

const Key:React.FC<KeyProps> = ({ isPlaying, keyNumber, letter, toggleSound, sound }) => {
    return (
    <div data-key={keyNumber} className={`key ${isPlaying ? 'playing' : ''}`} onClick={() => toggleSound(keyNumber)} >
        <kbd>{letter}</kbd>
        <span className="sound">{sound}</span>
    </div>
    )
}

export default Key;