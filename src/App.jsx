import Hello from './components/basics/01-helloWorld'
import JsxExample from './components/basics/02-jsx'
import Events from './components/basics/03-events'
import ParrentData from './components/basics/05-parentData'
import './index.css'

function App() {
  const name = 'Mahesh Sharma'
  return (
    <>
      {/* <Hello /> */}
      {/* <JsxExample name={name} /> */}
      {/* <Events /> */}
      <ParrentData />
    </>
  )
}

export default App
