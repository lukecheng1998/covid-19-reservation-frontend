import {SET_EVENTS, POST_EVENTS, LOADING_DATA} from '../types'

const initialState = {
    events: [],
    event: {},
    loading: false
}
export default function(state = initialState, action){
    switch(action.type){
        case LOADING_DATA:
            return {
                ...state,
                loading: true
            }
        case SET_EVENTS:
            return {
                ...state,
                events: action.payload,
                loading: false
            }
        case POST_EVENTS:
            return {
                ...state,
                events: [
                    action.payload,
                    ...state.events
                ]
            }
        default:
            return state;
    }
}