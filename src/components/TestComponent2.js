import React from 'react';
import { variantsCreator } from './variantsCreator';
import Options from './Options';

const TestComponent2 = (props) => {

    let variantsElements = variantsCreator(props.state.variants).map((d,index) => <Options correct={props.state.correct} key={index} 
    live={props.live} gameOver={props.gameOver} onClick={props.onClick} variantsItem={d} ind={index} />);

    return <div className="testComponent">

       <div className="d-grid gap-3 col-6 mx-auto">
    <button 
    className="btn btn-dark active questNumber" type="button">
    {props.questNumber}</button>
    <button 
    className="btn btn-danger active question" type="button">
    {props.state.question}</button>
    
   {variantsElements}
   </div>
</div>
}

export default TestComponent2