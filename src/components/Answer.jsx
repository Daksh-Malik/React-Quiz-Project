import React from 'react'

export default function Answer({option,setScore,isAnswered,setIsAnswered}) {

    function handleAnswer(isCorrect){
        setIsAnswered(true);
        if(isCorrect){
            setScore(prev => prev+1);
        }
    }

  return (
    <button onClick={()=>handleAnswer(option.isCorrect)} style={{backgroundColor : isAnswered ? `${option.isCorrect ? 'green' : 'red'}` : ''}} className='answer' disabled={isAnswered}>{option.answerText}</button>
  )
}
