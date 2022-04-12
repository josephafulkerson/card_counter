import {useState, useEffect} from 'react'

const Forms = ({setDeckID}) => {
    const [deckNum, setDecks] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(
          `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${deckNum}`
        )
          .then((resp) => resp.json())
          .then((data) => {
            setDeckID(data.deck_id);
          });
      };

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>
          Select number of decks
          <select onChange={(e) => setDecks(e.target.value)}>
            <option default>Select</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
          </select>
          <input type="submit" value="submit" style={{ marginTop: "2%" }} />
        </label>
      </form>
    </>
  )
}

export default Forms
