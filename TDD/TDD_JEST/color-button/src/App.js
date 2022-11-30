import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setColor] = useState('red');
  const newColor = buttonColor === 'red' ? 'blue' : 'red';


  return(
    <div>
      <button style={{ backgroundColor: buttonColor }}
        onClick={()=> setColor(newColor)}>change to {newColor}!</button>
        {/* 자바스크립트로 만들어낸 html기 때문에 결국 자바스크립트니까 onClick을 같이 써도 되는것. */}
    </div>
  );
}

export default App;
