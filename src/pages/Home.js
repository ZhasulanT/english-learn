import React from 'react';
import { NavLink } from 'react-router-dom';



export const Home = () => {
    return(
          <div>
        <div className="home">

            <div className="for-child-block">
            <div className="for-child">
          
          
          <NavLink  to="startTestsEasy" exact>для детей</NavLink>
          </div>
          </div>

            <div className="for-profi-block">
          <div className="for-profi">
            <NavLink  to="startTestsHard" exact>для взрослых</NavLink>
         </div>
         </div>
        </div>
        <div className="footer">
        
        </div>
        </div>
       
    );
}

