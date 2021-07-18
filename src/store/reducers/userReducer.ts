interface UserState {
    users: [];
    isLoading: boolean;
    errors: null | string;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    errors: null
}

const FETCH_USERS = 'FETCH_USERS'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'

export const userReducer = (state = initialState, action): UserState => {
    switch(action.type) {
        
    case FETCH_USERS:
        return {isLoading: true, errors: null, users: []}

    case FETCH_USERS_SUCCESS:
        return {isLoading: false, errors: null, users: action.payload}
    
    case FETCH_USERS_ERROR:
        return {isLoading: false, errors: action.payload, users: []}

    default:
        return state
    }
}