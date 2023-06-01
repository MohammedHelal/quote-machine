import quotes from "./quotes.json";
import { useState, useEffect } from "react";
import Quotes from "./quotes.js";
import "./styles.css";

function App() {
  const [person, setPerson] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );
  const [currentQuote, setCurrentQuote] = useState(
    person.quotes[Math.floor(Math.random() * person.quotes.length)]
  );

  useEffect(() => {
    if (person.id === 1) {
      document.body.style.backgroundColor = "crimson";
      document.querySelector(".card-body").style.color = "crimson";
      document.querySelector("#tweet-quote").style.color = "crimson";
      document.querySelector("#tumblr-quote").style.color = "crimson";
    } else if (person.id === 2) {
      document.body.style.backgroundColor = "indigo";
      document.querySelector(".card-body").style.color = "indigo";
      document.querySelector("#tweet-quote").style.color = "indigo";
      document.querySelector("#tumblr-quote").style.color = "indigo";
    } else if (person.id === 3) {
      document.body.style.backgroundColor = "darkslategray";
      document.querySelector(".card-body").style.color = "darkslategray";
      document.querySelector("#tweet-quote").style.color = "darkslategray";
      document.querySelector("#tumblr-quote").style.color = "darkslategray";
    } else if (person.id === 4) {
      document.body.style.backgroundColor = "teal";
      document.querySelector(".card-body").style.color = "teal";
      document.querySelector("#tweet-quote").style.color = "teal";
      document.querySelector("#tumblr-quote").style.color = "teal";
    } else if (person.id === 5) {
      document.body.style.backgroundColor = "orangered";
      document.querySelector(".card-body").style.color = "orangered";
      document.querySelector("#tweet-quote").style.color = "orangered";
      document.querySelector("#tumblr-quote").style.color = "orangered";
    } else if (person.id === 6) {
      document.body.style.backgroundColor = "steelblue";
      document.querySelector(".card-body").style.color = "steelblue";
      document.querySelector("#tweet-quote").style.color = "steelblue";
      document.querySelector("#tumblr-quote").style.color = "steelblue";
    }
  }, [person]);

  function randomNumber() {
    setPerson(quotes[Math.floor(Math.random() * quotes.length)]);
    let i = Math.floor(Math.random() * person.quotes.length);
    setCurrentQuote(person.quotes[i]);
  }

  return (
    <div>
      <Quotes
        person={person}
        currentQuote={currentQuote}
        randomNumber={randomNumber}
      />
    </div>
  );
}

export default App;
