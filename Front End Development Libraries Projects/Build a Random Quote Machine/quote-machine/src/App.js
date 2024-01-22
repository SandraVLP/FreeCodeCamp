import logo from "./logo.svg";
import "./App.css";
import { Button, Row } from "react-bootstrap";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
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
        tweetUrl: "https://twitter.com/intent/tweet/?text=" + data.content.replace(/ /g, "+")
      })
      })
      .catch((err) => {
        console.log(`Ошибка; ${err}`);
      });
  };


  return (
    <div className="App" id="app">
      <Container id="quote-box">
        <Row id="quote-row" className="justify-content-md-center" >
          <div id="text">
            {quote.text}
          </div>
          <div id="author">  {quote.author}</div>
        </Row>
        <Row lg="3" className="justify-content-md-center">
        <ButtonGroup size="lg" className="mb-2">
        <Button id="new-quote" variant="outline-primary" onClick={getQuote}>
          Get new Quote
        </Button>

       <Button href={quote.tweetUrl}  id="tweet-quote" variant="primary">
          Tweet Quote
        <Twitter color="white" size={30} />
        </Button> 
        </ButtonGroup>
        </Row>
      </Container>
    </div>
  );
}

export default App;
