import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import { Twitter } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

function App() {
const [quote, setQuote] = useState({});

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch("https://api.quotable.io/random ")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setQuote({
        author: data.author,
        text: data.content,
      })
      })
      .catch((err) => {
        console.log(`Ошибка; ${err}`);
      });
  };

  return (
    <div className="App">
      <div id="quote-box">
        <div>
          <div id="text">
            {quote.text}
          </div>
          <div id="author">  {quote.author}</div>
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
