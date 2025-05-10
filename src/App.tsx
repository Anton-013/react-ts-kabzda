
import './App.css'
import { Accordion } from './components/Accordion/Accordion'
import { OnOff } from './components/OnOff/OnOff'
import { Rating } from './components/Rating/Rating'
import { UncontrolledAccordion } from './components/UncontrolledAccordion/UncontrolledAccordion'

function App() {
  console.log("App")
  return (
    <>
      <UncontrolledAccordion title={"Menu"} />
      <UncontrolledAccordion title={"Users"} />
      {/* <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/> */}
      <OnOff />
      <OnOff />
      <OnOff />
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
