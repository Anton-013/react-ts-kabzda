
type ItemType = {
    title: string
    value: any
}

type AccordionProps = {
    title: string
    collapsed: boolean
    onChange: (col: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
}


export const Accordion = (props: AccordionProps) => {
    console.log("Accordion")

    return (
        <>
            <AccordionTitle onChange={props.onChange} title={props.title} collapsed={props.collapsed} />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick} />}
        </>
    )
}

const AccordionTitle = (props: any) => {
    console.log("AccordionTitle")
    return (
        <h3 onClick={() => props.onClick(!props.collapsed)}>{props.title}</h3>
    )
}

type AccordionBodyProps = {
    items: ItemType[]
    onClick: (value: any) => void
}

const AccordionBody = (props: AccordionBodyProps) => {
    console.log("AccordionBody")
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    )
}

