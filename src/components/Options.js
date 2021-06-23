import React from 'react';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';


const Options = (props) => {
   
    const [variantsItem, setVariantsItem] = useState(props.variantsItem)
    const [btnStyle, setBtnStyle] = useState("btn btn-primary")
   
    const error = () => {
        setBtnStyle("btn btn-danger")
        setTimeout(setVariantsItem, 500, null)
    }
    
    const success = () => {
        setBtnStyle("btn btn-success")
        setTimeout(props.onClick, 500)
    }

    const errorGameOver = () => {
        setBtnStyle("btn btn-danger")
        setTimeout(props.gameOver, 500)
    }
    
    const onClick = () => {
        if (variantsItem !== props.correct && props.live > 0) {
            error()
        }

     else if (variantsItem !== props.correct && props.live === 0) {
            errorGameOver()
        }
    
        else {
            success()
        }
        
    }
    
        return (
           <CSSTransition in={!variantsItem ? false: true} classNames='alert' timeout={300} unmountOnExit>
            <button onClick={() => onClick()}
        className={`${btnStyle} btn-variants active`} type="button">
        {variantsItem}</button></CSSTransition>)
    }


export default Options;