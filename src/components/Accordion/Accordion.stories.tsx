import type { Meta } from '@storybook/react'

import { Accordion } from './Accordion'
import { useState } from 'react'

const meta: Meta<typeof Accordion> = {
    component: Accordion,
}

export default meta



export const CollapsedAccordion = () => {
    return (
        <Accordion
            title='CollapsedAccordion'
            collapsed={true}
            onClick={() => { }} />
    )
}

export const OpenedAccordion = () => {
    return (
        <Accordion
            title='OpenedAccordion'
            collapsed={false}
            onClick={() => { }} />
    )
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <Accordion
            title='Accordion'
            collapsed={collapsed}
            onClick={() => {
                setCollapsed(!collapsed)
            }} />
    )
}