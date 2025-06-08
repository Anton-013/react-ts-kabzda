import { useReducer } from "react"
import { reduser, TOGGLE_COLLAPSED } from "./reduser"

type AccordionProps = {
    title: string
}

export const UncontrolledAccordion = (props: AccordionProps) => {
    console.log("Accordion")

    const [state, dispatch] = useReducer(reduser, { collapsed: false })

    return (
        <>
            <AccordionTitle title={props.title} onClick={() => { dispatch({ type: TOGGLE_COLLAPSED }) }} />
            {!state.collapsed && <AccordionBody />}
        </>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log("AccordionTitle")
    return (
        <h3 onClick={() => { props.onClick() }}>{props.title}</h3>
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

