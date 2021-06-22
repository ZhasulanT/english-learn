import React from 'react';



const GameOver = (props) => {
    return( <div  className="alert alert-danger info" role="alert">
   <h1>Задача не выполнена!</h1>
   <h2>{`"${props.state.question}" переводиться как "${props.state.correct}"`}</h2>
   <h2>{`Правильных ответов ${props.questNumber - 1}`}</h2>
 <button type="button" className="btn btn-outline-success" onClick={() => {props.startTest()}}>Начать сначала</button>
   </div>)
}

export default GameOver;