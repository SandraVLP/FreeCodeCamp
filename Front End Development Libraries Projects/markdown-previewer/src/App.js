
import './App.css';
import { useState } from 'react';

function App() {

  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <div className="App">
      <div className='container'>
 <textarea id="editor" onChange={handleChange} placeholder='Text'></textarea>
 <div id="preview">{text}</div>

 </div>
    </div>
  );
}

export default App;
