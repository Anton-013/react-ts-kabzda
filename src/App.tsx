
import './App.css'
import { Accordion } from './components/Accordion/Accordion'
import { OnOff } from './components/OnOff/OnOff'
import { Rating } from './components/Rating/Rating'
import { UncontrolledAccordion } from './components/UncontrolledAccordion/UncontrolledAccordion'
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating'

function App() {
  console.log("App")
  return (
    <>
      <UncontrolledAccordion title={"Menu"} />
      <OnOff />
      <UncontrolledRating />
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
