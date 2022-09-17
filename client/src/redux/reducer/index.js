const {
    GET_POSTS,
} = require('../actions/index');

const initialState = {
    posts: [],
};

function rootReducer(state = initialState, action) {

    if ( action.type === GET_POSTS ) {
        return {
            ...state,
            posts: action.payload
        }
    }

    return state;

} //fin rootReducer

export default rootReducer;