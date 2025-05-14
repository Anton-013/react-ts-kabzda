
import { useState } from 'react'
import './App.css'
import { Accordion } from './components/Accordion/Accordion'
import { OnOff } from './components/OnOff/OnOff'
import { Rating, ValueType } from './components/Rating/Rating'
import { UncontrolledAccordion } from './components/UncontrolledAccordion/UncontrolledAccordion'
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating'

function App() {
  console.log("App")

  let [ratingValue, setRatingValue] = useState<ValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

  return (
    <>
      <UncontrolledAccordion title={"Menu"} />
      <OnOff />
      <UncontrolledRating />
      <Rating value={ratingValue} onClick={setRatingValue} />
      <Accordion collapsed={accordionCollapsed} onClick={setAccordionCollapsed} title='menu'/>
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
