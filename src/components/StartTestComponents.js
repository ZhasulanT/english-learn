import React from 'react';
import { useState } from 'react';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import TestComponent from './TestComponent';
import TestComponent2 from './TestComponent2';


export const StartTestComponents = (props) => {

   
    const [state, setState] = useState(true);


 let onClick = () => {

    if (props.finish !== 0) {
        setTimeout(props.nextClick,500)
        setTimeout(setState(state => !state),1000)
    }

    else  {
        props.congratulation()
    }
    }


    return (
    <>
<SwitchTransition mode="out-in">
          <CSSTransition
            key={state}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            classNames="fade"
          >
        {state ? <TestComponent gameOver={props.gameOver} live={props.live} questNumber={props.questNumber} onClick={onClick} state={props.state} /> : 
        <TestComponent2 gameOver={props.gameOver} live={props.live} questNumber={props.questNumber} onClick={onClick} state={props.state} />}
             
          </CSSTransition>
        </SwitchTransition>
    </>
          
)
}
