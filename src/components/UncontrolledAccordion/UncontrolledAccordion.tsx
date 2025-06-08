import { useReducer, useState } from "react"

type AccordionProps = {
    title: string
    // collapsed: boolean
}

type ActionType = {
    type: string
}

const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED'

const reduser = (state: boolean, action: ActionType) => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return !state
        default: 
        throw new Error('Bad action type')
    }

    if (action.type === TOGGLE_CONSTANT) {
        return !state
    }

    return state
}

export const UncontrolledAccordion = (props: AccordionProps) => {
    console.log("Accordion")

    // const [collapsed, setCollapsed] = useState(false)
    const [collapsed, dispatch] = useReducer(reduser, false)

    return (
        <>
            <AccordionTitle title={props.title} onClick={() => { dispatch({ type: TOGGLE_CONSTANT }) }} />
            {!collapsed && <AccordionBody />}
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

