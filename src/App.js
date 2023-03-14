import logo from './logo.svg'
import './App.css'
import { MyUseCounterComponent } from './components/counterUsingStates'

function App() {
  return (
    <div className="App">
      <h1>This is Parent Component</h1>
      <MyUseCounterComponent />
    </div>
  )
}

export default App
