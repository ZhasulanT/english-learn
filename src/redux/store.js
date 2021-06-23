import { createStore } from "redux";
import profileReducer from "./reducer";


export let store = createStore(profileReducer);