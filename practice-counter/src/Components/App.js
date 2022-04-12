import { useState, useEffect } from "react";
import Cards from "./Cards";
import Forms from "./Forms";

function App() {
  const [runningCount, setCount] = useState("");
  const [deckNum, setDecks] = useState("");
  const [deckID, setDeckID] = useState("");

  return (
    <>
      {!deckID ? <Forms setDeckID={setDeckID}/>
       : null }
      {/* <Forms /> */}
      {!deckID ? null : <Cards deck_id={deckID} />}
    </>
  );
}

export default App;
