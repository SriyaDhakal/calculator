import { useState } from 'react'
import Display from './Components/Display'
import ButtonGrid from './Components/ButtonGrid'
import History from './Components/History.tsx/History'
import './App.css'

function App() {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState('0')
  const [history, setHistory] = useState<string[]>([])

    const handleClearHistory = () => {
    setHistory([])
  }

  const handleButtonClick = (label: string) => {
    if (label === '=') {
      try {
        const evaluated = eval(expression)
        setExpression(`${expression} = ${evaluated}`)
        setHistory(prev => [...prev, `${expression} = ${evaluated}`]) 
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
    <div className="calculator-container">
      <div className="calculator-wrapper">
              <h1 className="calculator-title">Calculator with History</h1>
             <div className="calculator-layout">  
              <div className="calculator">
        <Display expression={expression} value={result} /> 
        <ButtonGrid onButtonClick={handleButtonClick} />
        </div>
        <History history={history} onClearHistory={handleClearHistory} />
      </div>
    </div>
    </div>
    
  )
}

export default App