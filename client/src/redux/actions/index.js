import axios from 'axios';

export const GET_POSTS = "GET_POSTS";
export const GET_PROFILE = "GET_PROFILE";

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

export function getProfile() {
    return async function(dispatch) {
        var json = await axios.get('http://localhost:3001/api/v1/profile', {

        })
        // console.log("Profile", json.data[0])
        return dispatch({
            type: GET_PROFILE,
            payload: json.data[0]
        })
    }
}