import { combineReducers, createStore } from 'redux'
import commentsReducer from './reducer'

let reducers = combineReducers({
    commentsReducer : commentsReducer
});

export const store = createStore(reducers);