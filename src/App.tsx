import './App.css'
import { UncontrolledAccordion } from './components/UncontrolledAccordion/UncontrolledAccordion'
import { Example } from './Example'

function App() {
  console.log("App")

  return (
    <>
      <UncontrolledAccordion title='Users'/>
      <Example/>
    </>
  )
}

export default App
