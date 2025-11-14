import { useState } from 'react';
import './App.css';
import Greetings from './components/Greetings';
import Counter from './components/Counter';
import KeyboardDemo from './components/KeyEvent';
import Posts from './components/ApiFile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greetings name='Enrico' sureName='Gehring'/>

      <Counter />
      <KeyboardDemo />   

      <div id='file-api'>
        <h3>File API</h3>
        <Posts />
      </div>   
    </>
  )
}

export default App
