import React, { useContext, useState } from 'react'
import '../App.css' ;
import { QuizContext } from '../Helpers/Context';
import { Questions } from '../Helpers/Questions'

const Finish = () => {
  const { scoreGame, setScoreGame, setGameState, userName, setUserName } = useContext(QuizContext);

  const restartQuiz = () => {
    setScoreGame(0);
    setGameState("menu");
    setUserName("");
  }

  return (
    <div className="Finish">
      <h2>FINISH</h2>
      <h3>Congratulations {userName}</h3>
      <h3>Your score : {scoreGame} / {Questions.length} </h3>
      <button onClick={restartQuiz}> Restart Quiz </button>
    </div>
  )
}

export default Finish
