
type DisplayProps = {
  value: string
  expression: string
}

const Display = ({ expression, value }: DisplayProps) => {
  return (
    <div className="display">
      <div className="expression">{expression}</div>
      <div className="result">{value}</div>
    </div>
  )
}

export default Display


