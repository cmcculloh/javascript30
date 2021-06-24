interface KeyProps {
    dataKey: number,
    letter: string,
    sound: string
}

const Key:React.FC<KeyProps> = ({ dataKey=65, letter='A', sound='clap' }) => {
    return (
    <div data-key={dataKey} className="key">
        <kbd>{letter}</kbd>
        <span className="sound">{sound}</span>
    </div>
    )
}

export default Key;