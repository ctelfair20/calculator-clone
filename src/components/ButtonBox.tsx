import '../index.css';

// tells the component what its props should be
interface ButtonBoxProps {
  display: string[];
  setDisplay: (butonValue: string[]) => void;
}

const ButtonBox = ({ setDisplay, display }: ButtonBoxProps) => {

  const handleNumberClick = (num: string) => {
    console.log(num);
    const newDisplay = [...display, num];
    setDisplay(newDisplay);
  }

  const handleClearClick = () => {
    setDisplay([]);
  }

  const handleOperatorClick = (oper: string) => {
    console.log(oper);
    let operand = display.join("");
    console.log(operand);

  }

  return (
    <>
      <button onClick={handleClearClick}>AC</button>
      <button>-/+</button>
      <button>%</button>
      <button>/</button>
      <button onClick={() => { handleNumberClick('7') }}>7</button>
      <button onClick={() => { handleNumberClick('8') }}>8</button>
      <button onClick={() => { handleNumberClick('9') }}>9</button>
      <button onClick={() => { handleNumberClick('4') }}>4</button>
      <button onClick={() => { handleNumberClick('5') }}>5</button>
      <button onClick={() => { handleNumberClick('6') }}>6</button>
      <button onClick={() => { handleNumberClick('1') }}>1</button>
      <button onClick={() => { handleNumberClick('2') }}>2</button>
      <button onClick={() => { handleNumberClick('3') }}>3</button>
      <button onClick={() => { handleNumberClick('0') }}>0</button>
      <button onClick={() => { handleNumberClick('.') }}>.</button>
      <button onClick={() => { handleOperatorClick('x') }}>x</button>
      <button onClick={() => { handleOperatorClick('/') }}>/</button>
      <button onClick={() => { handleOperatorClick('+') }}>+</button>
      <button onClick={() => { handleOperatorClick('-') }}>-</button>
      <button>=</button>
    </>
  );
}

export default ButtonBox;