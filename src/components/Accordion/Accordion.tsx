
type AccordionProps = {
    title: string
    collapsed: boolean
}


export const Accordion = (props: AccordionProps) => {
    console.log("Accordion")

    return (
        <>
            <AccordionTitle title={props.title} />
            { !props.collapsed && <AccordionBody />}
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

