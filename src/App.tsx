import { useState } from 'react'
import Display from './Components/Display'
import ButtonGrid from './Components/ButtonGrid'
import './App.css'

function App() {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState('0')

  const handleButtonClick = (label: string) => {
    if (label === '=') {
      try {
        const evaluated = eval(expression)
        
        setExpression(`${expression} = ${evaluated}`)
      } catch {
        setResult('Error')
      }
    } else if (label === 'C') {
      setExpression('')
      setResult('0')
    } else {
      setExpression(prev => prev + label)
      setResult('')
    }
  }

  return (
    <div className="calculator">
      <Display expression={expression} value={result} />
      <ButtonGrid onButtonClick={handleButtonClick} />
    </div>
  )
}

export default App