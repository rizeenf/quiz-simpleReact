import React, { useContext } from 'react'
import '../App.css' ;
import { QuizContext } from '../Helpers/Context';

const MainMenu = () => {
  const { gameState, setGameState, userName, setUserName } = useContext(QuizContext)

  const setName = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  }

  return (
    <div className="Menu">
      <h2>Main Menu</h2>
      <input type="text" name="username" id="username" placeholder="Your Name" value={userName} onChange={setName} />
      <button onClick={ () => { setGameState("play") }}>Start Quiz</button>
    </div>
  )
}

export default MainMenu
