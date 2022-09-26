
import React, { useState } from 'react'
import '../index.css';
import Window from './Window'
import ButtonBox from './ButtonBox'

const Calculator = () => {
  // display can either be an array of strings or an array of numbers
  const [display, setDisplay] = useState<string[]>([]);
  // const [formula, setFormula] = useState([]);

  return (
    <div className="calculator">
      <Window display={display} />
      <ButtonBox setDisplay={setDisplay} display={display} />
    </div>
  );
}

export default Calculator;