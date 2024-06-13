import React from 'react'

export default function ScoreScreen({score}) {

    function handleReset(){
        window.location.reload();
    }

  return (
    <>
        <h1 className='score'>
            You Scored {score} out of 4
        </h1>
        <button onClick={handleReset} className='btn'>Reset</button>
    </>
  )
}
