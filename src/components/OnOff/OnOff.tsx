import { useState } from "react"


type PropsType = {
    //on: boolean
}

export const OnOff = (props: PropsType) => {

    let [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginRight: '2px',
        padding: '2px',
        backgroundColor: on ? 'green' : 'grey',
    }
    const offStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginRight: '5px',
        padding: '2px',
        backgroundColor: on ? 'grey' : 'red',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'red',
    }

    return (
        <div>
            <div style={onStyle} onClick={() => { setOn(true) }}>ON</div>
            <div style={offStyle} onClick={() => { setOn(false) }}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}