import React from 'react';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Info from '../components/info';
import { randomNumbersArray } from '../components/randomNumbersArray';
import { StartTestComponents } from '../components/StartTestComponents';
import {TestData} from '../components/data/testsData';
import GameOver from '../components/gameOver';

const StartTests = (props) => {
 
    const [randomNumber, setRandomNumber] = useState(randomNumbersArray(TestData.length));
    const [questNumber, setQuestNumber] = useState(1);
    const [finish, setFinish] = useState(TestData.length - 1);
    const [useStateTest, setUseStateTest] = useState(TestData[randomNumber[questNumber - 1]]);
    const [showTest, setShowTest] = useState(true);
    const [showInfo, setShowInfo] = useState(false);
    const [infoPage, setInfoPage] = useState(false);
   
   
    
    const startTest = () => {
        setFinish(TestData.length - 1)
        setUseStateTest(TestData[randomNumber[0]]);
        setQuestNumber(1)
        setShowInfo(false)
    }

    const nextClick = () => {
        setUseStateTest(TestData[randomNumber[questNumber]])
        setQuestNumber(questNumber + 1)
        setShowTest(false)
        showTestNew()
        setFinish(finish-1)
    }

    const showTestNew = () => {
        setShowTest(true)
    }

    const congratulation = () => {
        setInfoPage(true)
        setRandomNumber(randomNumbersArray(TestData.length))
        setShowInfo(true)  
    }

    const gameOver = () => {
        setInfoPage(false)
        setRandomNumber(randomNumbersArray(TestData.length))
        setShowInfo(true)  
    }

    return(
        <div className="starTest">
            {showTest && 
        <StartTestComponents gameOver={gameOver} state={useStateTest} finish={finish} live={props.live}
        congratulation={congratulation} nextClick={nextClick} questNumber={questNumber} /> 
    } 

    <CSSTransition in={showInfo}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowTest(false)}
        onExited={() => setShowTest(true)}>
     {infoPage ? <Info startTest={startTest} /> : <GameOver questNumber={questNumber} state={useStateTest} startTest={startTest} />}  
     </CSSTransition> 
       
    </div>
    );
}

export default StartTests;