import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <div id="quote-box">
        <div>
        <div id="text"> "I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures."</div>
        <div id="author">Lao Tzu</div>
        </div>
        <button id="new-quote">Get new Quote</button>
      
        <a href="#" id="tweet-quote"><i className="fab fa-twitter"></i> Tweet Quote</a>
        
      </div>

      <div className='App-header'>
        <div class='alert alert-primary' role='alert'>
          <p style={{ display: "none" }} className='d-block'>
            Bootstrap is now successfully installed 😃
          </p>
          <p className='d-none'>
            Bootstrap is not installed if you can see this 😢
          </p>
        </div>
        </div>
    </div>
  );
}

export default App;
