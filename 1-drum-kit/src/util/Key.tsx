interface KeyProps {
    isPlaying: boolean,
    letter: string,
    toggleSound: Function,
    sound: string
}

const Key:React.FC<KeyProps> = ({ isPlaying, letter, toggleSound, sound }) => {
    return (
    <div data-key={letter} className={`key ${isPlaying ? 'playing' : ''}`} onClick={() => toggleSound(letter)} >
        <kbd>{letter}</kbd>
        <span className="sound">{sound}</span>
    </div>
    )
}

export default Key;