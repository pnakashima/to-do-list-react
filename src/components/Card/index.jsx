

const Card = (props) => {
    const {index, task, color, onDoubleClick} = props
    return (
        <>
        <p key={index} style={{backgroundColor: color}} onDoubleClick={onDoubleClick}>{task}</p>
        </>
    )
}

export default Card