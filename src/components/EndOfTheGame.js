import './EndOfTheGame.css' 

export default function EndOfTheGame({ turns, shuffleCards }) {
    const Range = ()=>{
        if(turns<=13){
            return "Excelent!"
        }else if(turns>13 && turns<18){
            return "Good Job!"
        }else if(turns>18){
            return "Good, try again you can do it better!"
        }
    }
  return (
    <div className='end-game'>
        <div className='inner-end-game'>
            <h2>You've finished the game</h2>
            <p><Range /></p>
            <p>You did it in {turns} turns</p>
            <button onClick={shuffleCards}>New Game</button>
        </div>
    </div>
  )
}
