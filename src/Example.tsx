import { useMemo, useState } from "react"


function generateData() {
    console.log('generateData')

    return 1;
}

export const Example = () => {
    console.log('Example')

    // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => state + 1

    return (
        <>
            <button onClick={() => { setCounter(changer) }}>+</button>
            {counter}
        </>
    )
}