
type AccordionProps = {
    title: string
    collapsed: boolean
    onClick: (col: boolean) => void
}


export const Accordion = (props: AccordionProps) => {
    console.log("Accordion")

    return (
        <>
            <AccordionTitle onClick={props.onClick} title={props.title} collapsed={props.collapsed}/>
            { !props.collapsed && <AccordionBody />}
        </>
    )
}

const AccordionTitle = (props: any) => {
    console.log("AccordionTitle")
    return (
        <h3 onClick={() => props.onClick(!props.collapsed)}>{props.title}</h3>
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

