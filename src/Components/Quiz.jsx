import React, { useContext, useState } from 'react'
import '../App.css' ;
import { QuizContext } from '../Helpers/Context';
import { Questions } from '../Helpers/Questions'

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optChoose, setOptChoose] = useState("");
  const { scoreGame, setScoreGame, setGameState } = useContext(QuizContext);

  const nextQuestion = () => {
    if( optChoose === Questions[currentQuestion].answer ){
      setScoreGame(scoreGame + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  }

  const finishQuestion = () => {
    if( optChoose === Questions[currentQuestion].answer ){
      setScoreGame(scoreGame + 1);
    }

    setGameState("finish")
  }

  return (
    <div className="Quiz">
      <h3>{Questions[currentQuestion].query}</h3>
      <div>
        <button onClick={ ()=> setOptChoose("A") }> {Questions[currentQuestion].optA}</button>
      
        <button onClick={ ()=> setOptChoose("B") }> {Questions[currentQuestion].optB}</button>
      
        <button onClick={ ()=> setOptChoose("C") }> {Questions[currentQuestion].optC}</button> 
      
        <button onClick={ ()=> setOptChoose("D") }> {Questions[currentQuestion].optD}</button>
      </div>

      {currentQuestion == Questions.length -1 ? (
        <button onClick={finishQuestion} > Finish </button>
      ) : (
        <button onClick={nextQuestion} > Next Question </button>
      )}
      
    </div>
  )
}

export default Quiz
