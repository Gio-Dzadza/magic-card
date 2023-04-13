import { useEffect, useState } from 'react'
import './CardGame.css'
import SingleCard from './components/SingleCard';
import EndOfTheGame from './components/EndOfTheGame';
import PointsMarkap from './components/PointsMarkap';

const cardImages = [
  { src: "https://gio-dzadza.github.io/magic-card/img/helmet-1.png", matched: false },
  { src: "https://gio-dzadza.github.io/magic-card/img/potion-1.png", matched: false },
  { src: "https://gio-dzadza.github.io/magic-card/img/ring-1.png", matched: false },
  { src: "https://gio-dzadza.github.io/magic-card/img/scroll-1.png", matched: false },
  { src: "https://gio-dzadza.github.io/magic-card/img/shield-1.png", matched: false },
  { src: "https://gio-dzadza.github.io/magic-card/img/sword-1.png", matched: false }
];



export default function AppShuffleCard() {
    const[cards, setCards] = useState([]);
    const[turns, setTurns] = useState(0);
    const[choiceOne, setChoiceOne] = useState(null);
    const[choiceTwo, setChoiceTwo] = useState(null);
    const[disabled, setDisabled] = useState(false);
    const[showEnd, setShowEnd] = useState(false);
    const[didMount,setDidMount] = useState(false);
    const[userName,setUserName]=useState("");
    const[points,setPoints]=useState([]);

    const settingUsername = ()=>{
        let userNameInput = prompt("Please enter your name:");
        setUserName(userNameInput);
    };


    useEffect(()=>{setDidMount(true)},[])

    const sortByPoints = ()=>{
        if(points){
            points.sort((a,b)=> a.point - b.point);
        }
    };
    const shuffleCards = ()=>{
        const shuffledCards = [...cardImages, ...cardImages]
        .sort(() => Math.random() - 0.5)
        .map((card)=>({...card, id: Math.random() }));
        setChoiceOne(null);
        setChoiceTwo(null);
        setCards(shuffledCards);
        setShowEnd(false)
        setTurns(0);
        settingUsername();
        sortByPoints();
    };



    const handleChoice = (card)=>{
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    };

 
    useEffect(()=>{
        if(choiceOne && choiceTwo){
            setDisabled(true)
            if(choiceOne.src === choiceTwo.src){
                setCards(prevCards =>{
                    return prevCards.map(card =>{
                        if(card.src === choiceOne.src){
                            return{...card, matched: true}
                        }else{
                            return card
                            }
                    })
                })
                resetTurn();
            }else{
                setTimeout(()=> resetTurn(), 1000);
                }
        }
    },[choiceOne, choiceTwo]);

    const resetTurn = ()=>{
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns +1)
        setDisabled(false)
    };

    useEffect(()=>{
        shuffleCards()
    },[]);

    const addPoint = () =>{
        const userPoint ={
            name: userName ? userName : '---' ,
            point: turns
        }
        setPoints((prevPoints)=>{
          return [...prevPoints, userPoint]
        });
    }


    useEffect(()=>{
        if(didMount){
            let matchedCard = cards.filter(card => !card.matched);
            if(matchedCard.length===0){
                setShowEnd(true);
                addPoint();
            }else{
                setShowEnd(false)
            }
        }
    },[cards, didMount]);

  return (
    <div className='AppContainer'>
        <div className='App'>
            <div>
            <h1>Magic Match</h1>
            {
                userName && (<h2>Hi {userName}</h2>)
            }
            <button onClick={shuffleCards}>New Game</button>
            <div className='card-grid'>
                {
                    cards.map(card => (
                        <SingleCard 
                        key={card.id} 
                        card={card} 
                        handleChoice={handleChoice}
                        flipped={card === choiceOne || card === choiceTwo || card.matched}
                        disabled={disabled}
                        />
                    ))
                }
            </div>
            <p>Turns: {turns}</p>
            {
               showEnd &&  <EndOfTheGame shuffleCards={shuffleCards} turns={turns}/>
            }
            </div>
            <div className='points'>
            <div className='points-list'>
                <div className='ranks'><p>Ranks</p></div>
                <div className='oldiv'>
                <ol>
                    {
                        points && <PointsMarkap points={points} />
                    }
                </ol>
                </div>
            </div>
        </div>
        </div>
    
    </div>
  )
};
