import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import { Twitter } from 'react-bootstrap-icons';

function App() {
  return (
    <div className="App">
      <div id="quote-box">
        <div>
          <div id="text">
            {" "}
            "I have just three things to teach: simplicity, patience,
            compassion. These three are your greatest treasures."
          </div>
          <div id="author">Lao Tzu</div>
        </div>
        <Button id="new-quote" variant="outline-primary">
          Get new Quote
        </Button>

        <a
          href="#"
          id="tweet-quote"
          className="btn btn-lg outline-primary"
          target="_blank"
        >
         <Twitter color="royalblue" size={96} />
          Tweet Quote
        </a>
      </div>
    </div>
  );
}

export default App;
