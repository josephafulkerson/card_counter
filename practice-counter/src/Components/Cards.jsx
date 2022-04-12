import {useEffect, useState} from 'react'

const Cards = ({deck_id}) => {

    const [deckData, setDeckData] = useState("")


    useEffect(() => {
    const intervalId = setInterval(() => {
    fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
        setDeckData(data)
    })
}, 1000)
return () => clearInterval(intervalId)
}, []);

if (!deckData) return <div>Loading..</div>

  return (
    <>
    {deckData.remaining == 0 ? alert("No more cards. Your accuracy was..") : null}
    <h3 style={{marginRight: '75%'}}>Cards Remaining: {deckData.remaining}</h3>
    <h3 style={{marginRight: '75%'}}>Decks Remaining: {Math.round(((deckData.remaining) / 52) / 0.5) * .5}</h3>
    <img id='dealer1' src={deckData.cards[0].image} alt='card' width='110px' height='150px' />
    <br/>
    <hr style={{width: '110%'}}/>
    <img id='player1' src={deckData.cards[1].image} alt='card' width='110px' height='150px' />
    </>
  );
}

export default Cards