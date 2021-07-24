import { PROFILE_ERROR, GET_PROFILE, CLEAR_PROFILE } from '../actions/types'

const initialState = {
    profile: null,
    profiles: [],
    repos: [],
    loading: true,
    error: {}
}

const profile = ( state = initialState, action ) => {

    const { type, payload} = action

    switch (type) {

        case GET_PROFILE:
            return {
                ...state,
                profile: payload,
                error: null,
                loading: false
            };
            
        case PROFILE_ERROR:
            return {
                ...state,
                profile: null,
                error: payload,
                loading: false
            };

        case CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
                repos:[],
                loading: false,
                error: {}
            };    

        default:
            return state;

    }

}

export default profile