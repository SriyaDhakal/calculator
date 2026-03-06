import Button from './Button'

const buttons = [
  'C',  '+/-', '%', '/',
  '7',  '8',   '9', '*',
  '4',  '5',   '6', '-',
  '1',  '2',   '3', '+',
  '0',  '.',   '=', ''
]

const ButtonGrid = ({ onButtonClick }: { onButtonClick: (label: string) => void }) => {
    return (
        <div className="button-grid">
            {buttons.map((label, index) => (
                <Button key={index} label={label} onClick={() => onButtonClick(label)} />
            ))}
        </div>
    )
}

export default ButtonGrid;
