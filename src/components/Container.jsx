import React, { useState } from 'react'
import questions from '../data/data'
import Answer from './Answer'
import ScoreScreen from './ScoreScreen';

export default function Container() {

    const [currentIdx, setCurrentIdx] = useState(0);
    const [score,setScore] = useState(0);
    const [isQuizEnded,setIsQuizEnded] = useState(false);
    const [isAnswered,setIsAnswered] = useState(false);

    function handleNext(){
        setIsAnswered(false);
        if(currentIdx == questions.length-1){
            setIsQuizEnded(true);
        }
        setCurrentIdx(prev => prev+1);
        console.log(score);
    }

  return (
    <div className='container'>
        {
            isQuizEnded ? 
                <ScoreScreen score={score}/>
            :
            <>
                <div className='inner-container'>
                    <div className='question-box'>
                        <div className='question-head'>
                            <span>Question {currentIdx+1}</span>/{questions.length}
                        </div>
                        <div className='question-title'>
                            {questions[currentIdx].questionText}
                        </div>
                    </div>
                    <div className='answer-box'>
                        {questions[currentIdx].answerOptions.map(option => {
                            return <Answer option={option} setScore={setScore} isAnswered={isAnswered} setIsAnswered={setIsAnswered}/>;
                        })}
                    </div>
                </div>
                <div className='btn-box'>
                    <button onClick={handleNext} className='btn' disabled={!isAnswered}>{`Next >`}</button>
                </div>
            </>
        }
    </div>
  )
}
