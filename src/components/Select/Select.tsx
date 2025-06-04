import { useState, KeyboardEvent, useEffect } from 'react'
import styles from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectProps = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectProps) => {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.code === 'ArrowDown' || e.code === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.code === 'Escape' || e.code === 'Enter') {
            setActive(false)
        }
    }
    return (
        <>
            <div className={styles.select} onKeyDown={onKey} tabIndex={0}>
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={styles.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => { setHoveredElementValue(i.value) }}
                            key={i.value}
                            className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}
                            onClick={() => { onItemClick(i.value) }}>
                            {i.title}
                        </div>)}
                    </div>}
            </div>
        </>
    )
}