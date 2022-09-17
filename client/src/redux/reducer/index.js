const {
    GET_POSTS,
    GET_PROFILE
} = require('../actions/index');

const initialState = {
    posts: [],
    profile: []
};

function rootReducer(state = initialState, action) {

    if ( action.type === GET_POSTS ) {
        return {
            ...state,
            posts: action.payload
        }
    }
    if ( action.type === GET_PROFILE ) {
        return {
            ...state,
            profile: action.payload
        }
    }

    return state;

} //fin rootReducer

export default rootReducer;