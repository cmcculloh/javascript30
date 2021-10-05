interface HandProps {
    type: string,
    multiplier: number,
    time: number,
    length: number,
    width: number
}

const Hand:React.FC<HandProps> = ({ type, multiplier, time, length, width }) => {
    const styles = {
      transform: `rotate(${time * multiplier + 90}deg)`,
      transformOrigin: "right",
      transition: "all 0.15s cubic-bezier(0, 2.47, 0.25, 1) 0s",
      width: `${length}%`,
      left: `${(50 - length) * 3}px`,
      height: `${width}px`,
      top: `${155 - width/2}px`,
      background: `${ type === 'second' ? '#bb0202' : 'black'}`
    }

    return (
        <div className={`hand ${type}-hand`} style={styles}></div>
    )
}

export default Hand;