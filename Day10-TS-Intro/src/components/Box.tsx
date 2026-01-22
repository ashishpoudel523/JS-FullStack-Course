type TProps = {
    title: string
    description: string
    boxNum: number
}

function Box ({title, description, boxNum}:TProps) {
    return (
        <>
            <h3>Box Component</h3>
            <p>{title}</p>
            <p>{description}</p>
            <p> {boxNum} </p>
        </>
    )
}

export {Box}