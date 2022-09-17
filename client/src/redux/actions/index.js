import axios from 'axios';

export const GET_POSTS = "GET_POSTS";

export function getPots() {
    return async function(dispatch) {
        var json = await axios.get('http://localhost:3001/api/v1/posts', {

        })
        console.log("Desde Actions", json.data)
        return dispatch({
            type: GET_POSTS,
            payload: json.data
        })
    }
}