//actions
import { 
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    //FRIENDS
    FETCHING_FRIENDS,
    FRIENDS_SUCCESS,
    FRIENDS_FAILURE

} from '../actions';
//initial state
const initialState = {
    data: [],
    fetchingData: false,
    loggedIn: false,
}
//reducer
export const rootReducer = (state=initialState, action) => {
    switch(action.type) {
        case LOGIN_START: 
        return {
            ...state,
            error: '',
            fetchingData: true,
            loggedIn: false
        }
        case LOGIN_SUCCESS: 
        return {
            ...state,
            error: '',   
            fetchingData: false,
            loggedIn: true
        }
        case LOGIN_FAILURE:
        return {
            ...state,
            error: '',
            fetchingData: false,
            loggedIn: false
        }
        case FETCHING_FRIENDS: 
        return {
            ...state,
            error:'',
            fetchingData: true,
        }
        case FRIENDS_SUCCESS:
        return {
            ...state,
            error: '',
            fetchingData: false, 
            data: action.payload
        }
        case FRIENDS_FAILURE:
        default: return state;
    }
}