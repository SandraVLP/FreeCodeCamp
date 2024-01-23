import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <div className="App">
 <textarea id="editor" onChange={handleChange}></textarea>
 <div id="preview">{text}</div>
    </div>
  );
}

export default App;
