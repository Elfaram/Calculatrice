import './App.css';
import Button from './components/Button/button';
import Input from './components/Input/input';
import { useState } from 'react';
import { evaluate } from 'mathjs';

const App = () => {
  const [text, setText] = useState('');
  const [resultat, setResultat] = useState('');
  const addText = (value) => {
    setText((text) => [...text, value + '']);
  };

  const calculateResult = () => {
    const input = text.join('');
    setResultat(evaluate(input));
  };
  const resetInput = () => {
    setText('');
    setResultat('');
  };
  const buttonColor = '#b62808';
  return (
    <div className='App'>
      <div className='calc'>
        <Input text={text} resultat={resultat} />
        <div className='row'>
          <Button symbol='7' handleClick={addText} />
          <Button symbol='8' handleClick={addText} />
          <Button symbol='9' handleClick={addText} />
          <Button symbol='/' handleClick={addText} color={buttonColor} />
        </div>
        <div className='row'>
          <Button symbol='6' handleClick={addText} />
          <Button symbol='5' handleClick={addText} />
          <Button symbol='4' handleClick={addText} />
          <Button symbol='*' handleClick={addText} color={buttonColor} />
        </div>
        <div className='row'>
          <Button symbol='3' handleClick={addText} />
          <Button symbol='2' handleClick={addText} />
          <Button symbol='1' handleClick={addText} />
          <Button symbol='+' handleClick={addText} color={buttonColor} />
        </div>
        <div className='row'>
          <Button symbol='0' handleClick={addText} />
          <Button symbol='.' handleClick={addText} />
          <Button symbol='=' handleClick={calculateResult} color='#8c3737' />
          <Button symbol='-' color={buttonColor} />
        </div>
        <Button symbol='C' handleClick={resetInput} color='#830505' />
      </div>
    </div>
  );
};

export default App;
