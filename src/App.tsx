import React,{useEffect,useState,useCallback} from 'react';
import {TOTAL_CARD} from './Constant';
import {TCard} from "./types";
import { arrangeCards, drawCard } from './api';
import {cardCompare} from './utils';;

function App() {

  const [score,setScore] = useState(0);
  const [counter,setCounter] = useState(TOTAL_CARD); 
  const [deckId,setDeckId]=useState("");
  const [selectedCard,setSelectedCard] = useState<TCard>({
    img:"",value:""
  })
  const isGameFinish = counter === 0;


  const arrangeData = useCallback (() => {
    
    arrangeCards()
      .then((res) => {
        setDeckId(res.deck_id);
        return res.deck_id;
      })
      .catch(() => console.log('error on fetching deckId'))
      .then((deckId) => 
        drawCard(deckId).then((data) => setSelectedCard({
          img: data.cards[0].image, value: data.cards[0].value
        }))
      )
      .catch(err=>console.log('error on fetch',err))
  },[])
  

  useEffect(() => {
    arrangeData();
  },[arrangeData])

  /* Function to Compare Cards */
  const compareCard = (isGreater:number) => {
    drawCard(deckId)
      .then((data)=> {
        // When it reset we check its have value
        if(counter <= 0 ) {
          alert("Start Again")
          return 0;
        }
        const nextCard = data.cards[0];
        if(nextCard && nextCard !== undefined) {
          // here we Compare value if its GreaterValue  or lower Value
        if(cardCompare(nextCard.value, selectedCard.value) === isGreater) {
          setScore((scoreValue) => scoreValue + 1)
        }
        // Set SelectedCard
        setSelectedCard({
          img: nextCard.image,
          value: nextCard.value
        });
        setCounter(data.remaining)
        }
        
      })

  }

  const resetCards = () => {
    // Here we reset all values 
    setCounter(TOTAL_CARD);
    setScore(0);
    arrangeData();
  }
  
  return (
    <div className="App">
      <header className="d-flex p-2">
        <h1>Cards</h1>
      </header>
      <section className="App-content">
        <div>
          <span>
            <h2 className="score">Score: {score}</h2>
            <p className="card"> Cards Left: {counter}</p>
          </span>
        </div>
        <div className="play-section">

          {!isGameFinish && (
            <button onClick={() => compareCard(-1)}>
              Next card will be lower
            </button>
          )}
         { counter > 0 && <img src={selectedCard?.img} alt="selected Card"/> }
          {!isGameFinish && (
            <button onClick={() => compareCard(1)}>
              Next card will be Greater
            </button>
          )}
        </div>
        <div>
          {isGameFinish && (
            <button onClick={resetCards}>Start a new Round</button>
          )}
        </div>
      </section>
    </div>
  );
}
export default App;
