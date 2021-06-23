const ADD_COMMENT = "ADD-COMMENT";
const UPDATE_TEXT = "UPDATE_TEXT";

let initialState = {
    comments: [
        { id: 1, comment: 'Hello friend Zhas'},
        { id: 2, comment: 'oneertdfdfgvdfgggggggggggggggg' },
        { id: 3, comment: 'two66666666666' },
        { id: 4, comment: 'Threessssdfsdffffffffffffffffffffff'}
    ],
    newText: ""
    
};


const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
       
        case ADD_COMMENT: {
        
            let newComment = {
                id: 5,
                comment: action.newCommentText,
            }
    
            return { ...state, 
                comments: [...state.comments, newComment]
            };
        }

        case UPDATE_TEXT: {
    
            return { ...state, 
                newText: action.newText
            };
        }
    
        default:
            return state;
    }
    
    }

    export const addCommentActionCreator = (newCommentText) => ({type: ADD_COMMENT, newCommentText})
    export const updateTextActionCreator = (newText) => ({type: UPDATE_TEXT, newText})

    export default commentsReducer;