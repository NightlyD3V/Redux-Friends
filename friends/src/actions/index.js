// █████╗  ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
//██╔══██╗██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
//███████║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
//██╔══██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
//██║  ██║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
//╚═╝  ╚═╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
//       

//import axios 
import axios from 'axios';
//import axios header
// import axiosAuth from '../utils/axiosAuth';
// export const FETCHING_DATA = 'FETCHING_DATA';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_SUCCESS = 'FRIENDS_SUCCESS';
export const FRIENDS_FAILURE = 'FRIENDS_FAILURE';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios   
        .post('http://localhost:5000/api/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload})
        })
        .catch(err => {
            dispatch({ type: LOGIN_FAILURE, payload: err})
        })
}

export const getTheFUCKINGFRIENDS = () => dispatch => {
    dispatch({ FETCHING_FRIENDS });
    axios
        .post('http://localhost:5000/api/friends', {headers: {authorization:localStorage.getItem('creds')}}) 
        .then(res => {
            console.log(res)
            dispatch({ type: FETCHING_FRIENDS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: FRIENDS_FAILURE, payload: err })
        })
}
