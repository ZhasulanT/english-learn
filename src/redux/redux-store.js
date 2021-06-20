import {combineReducers, createStore} from "redux";
import englishTestReducers from "./englishTestReducers";



let reducers = combineReducers({
    englishTestReducers : englishTestReducers,

});

let store = createStore(reducers);


export default store;