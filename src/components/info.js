import React from 'react';



const Info = (props) => {
    return( <div  className="alert alert-success info" role="alert">
   <h1>Задача выполнена!</h1>
   <h2>Вы ответили на все вопросы</h2>
 <button type="button" className="btn btn-outline-success" onClick={() => {props.startTest()}}>Начать сначала</button>
   </div>)
}

export default Info;