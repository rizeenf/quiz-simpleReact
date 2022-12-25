import { useState, useContext } from 'react'
import './App.css'
import Finish from './Components/Finish';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import { QuizContext } from './Helpers/Context';

function App() {
const [userName, setUserName] = useState("");
const [gameState, setGameState] = useState("menu");
const [scoreGame, setScoreGame] = useState(0);

  return (
    <div className="App">
      <h1>QUIZZY - Quiz Eazzy</h1>
      <QuizContext.Provider value={{ gameState, setGameState, scoreGame, setScoreGame, userName, setUserName }}>
      { gameState === "menu" && <MainMenu />}
      { gameState === "play" && <Quiz />}
      { gameState === "finish" && <Finish />}
      </QuizContext.Provider>
    </div>
  )
}

export default App
