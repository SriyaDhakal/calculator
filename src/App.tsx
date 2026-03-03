import { useState } from 'react'
import Display from './Components/Display'
import ButtonGrid from './Components/ButtonGrid'
import './App.css'

function App() {
  const [displayValue, setDisplayValue] = useState('0')

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <ButtonGrid onButtonClick={(label) => setDisplayValue(label)} />
    </div>
  )
}

export default App