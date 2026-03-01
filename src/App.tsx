import { useState } from 'react'
import Display from './Components/Display'
import Button from './Components/Button'

function App() {
  const [displayValue, setDisplayValue] = useState('0')

  return (
    <div>
      <Display value={displayValue} />
      {/* Add calculator buttons here in the future */}
    </div>
  )
}

export default App