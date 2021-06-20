import { randomNumbersArray } from "../components/randomNumbersArray";
import TestData from "../data/testsData";

const DELETE_ITEM = "DELETE_ITEM";



let initialState = {
    
}

const englishTestReducers = (state = initialState, action) => {
switch (action.type) {

    case DELETE_ITEM: 

    return {...state, test: [...state.test[action.indeX].variants[action.item] = null]

    };

    
            
    default:
        return state;
}

}

export const DeleteItem = (indeX, item) => (
    {type: DELETE_ITEM, indeX: indeX, item: item }
);



export default englishTestReducers;
