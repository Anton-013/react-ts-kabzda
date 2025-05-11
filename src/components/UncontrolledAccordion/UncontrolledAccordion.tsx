import { useState } from "react"

type AccordionProps = {
    title: string
    // collapsed: boolean
}


export const UncontrolledAccordion = (props: AccordionProps) => {
    console.log("Accordion")

    const [collapsed, setCollapsed] = useState(false)

    return (
        <>
            <AccordionTitle title={props.title} />
            <button onClick={() => {setCollapsed(!collapsed)}}>TOGGLE</button>
            {!collapsed && <AccordionBody />}
        </>
    )
}

const AccordionTitle = (props: any) => {
    console.log("AccordionTitle")
    return (
        <h3>{props.title}</h3>
    )
}

const AccordionBody = () => {
    console.log("AccordionBody")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

