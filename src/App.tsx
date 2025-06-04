
import { useState } from 'react'
import './App.css'
import { Accordion } from './components/Accordion/Accordion'
import { OnOff } from './components/OnOff/OnOff'
import { Rating, ValueType } from './components/Rating/Rating'
import { UncontrolledAccordion } from './components/UncontrolledAccordion/UncontrolledAccordion'
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating'
import { ControlledCheckbox, ControlledInput, ControlledInputWithFixedValue, ControlledSelect, GetValueOfUncontrolledInputBuButtonPress, TrackValueOfUncontrolledInput, UncontrolledInput } from './components/input/Input'
import { Select } from './components/Select/Select'

function App() {
  console.log("App")

  let [ratingValue, setRatingValue] = useState<ValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  const [value, setValue] = useState(null)
  const [value1, setValue1] = useState(null)

  return (
    <>
      {/* <Accordion onClick={(value) => { alert('some item was clicked. Value: ' + value) }} collapsed={accordionCollapsed} items={[{ title: 'Dimych', value: 1 }, { title: 'Valera', value: 2 }, { title: 'Artem', value: 3 }, { title: 'Viktor', value: 4 }]} onChange={setAccordionCollapsed} title={'Users'} /> */}
      <Select onChange={setValue} value={value} items={[
        { value: '1', title: 'Minsk' },
        { value: '2', title: 'Moscow' },
        { value: '3', title: 'Kiev' },
      ]} />
      <Select onChange={setValue1} value={value1} items={[
        { value: '1', title: 'Minsk' },
        { value: '2', title: 'Moscow' },
        { value: '3', title: 'Kiev' },
      ]} />
    </>
  )
}

type PageTitlePropsType = {
  title: string
}

const PageTitle = (props: PageTitlePropsType) => {
  return (
    <h1>{props.title}</h1>
  )
}



export default App
