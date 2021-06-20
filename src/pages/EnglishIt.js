import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';


export const EnglishIt = () => {
    return(
        <Fragment>
            <h1>Выберите уровень сложности</h1>
            <ul className="engList">
                <NavLink to="startTest" exact><li><button type="button" className="btn btn-warning">Легкий</button></li></NavLink>
                <NavLink to="startTest1" exact><li><button type="button" className="btn btn-success">Средний</button></li></NavLink>
                <NavLink to="startTest2" exact><li><button type="button" className="btn btn-danger">Сложный</button></li></NavLink>
                <NavLink to="startTest3" exact><li><button type="button" className="btn btn-secondary">Без права на ошибку</button></li></NavLink>
                
            </ul>
        </Fragment>
    );
}