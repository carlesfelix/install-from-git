import './App.css';
import { RadioButton } from 'zurich-components';
import { useState } from 'react';

function App() {
  const [ radioButtonValue, setRadioButtonValue ] = useState<boolean>(false)
  return (
    <div className="App">
      <br />
      <RadioButton
        value={radioButtonValue}
        onChange={setRadioButtonValue}
        labelPosition="right"
        label="Radio button from library"
      />
      <br />
      <br />
      <button onClick={() => setRadioButtonValue(old => !old)}>
        Toggle radiobutton
      </button>
    </div>
  );
}

export default App;
