interface UserState {
    users: any[];
    isLoading: boolean;
    errors: null | string;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    errors: null
}

enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction

interface FetchUsersAction{
    type: UserActionTypes.FETCH_USERS
}

interface FetchUsersSuccessAction{
    type: UserActionTypes.FETCH_USERS_SUCCESS
    payload: any[]
}

interface FetchUsersErrorAction{
    type: UserActionTypes.FETCH_USERS_ERROR
    payload: string
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch(action.type) {
        
    case UserActionTypes.FETCH_USERS:
        return {isLoading: true, errors: null, users: []}

    case UserActionTypes.FETCH_USERS_SUCCESS:
        return {isLoading: false, errors: null, users: action.payload}
    
    case UserActionTypes.FETCH_USERS_ERROR:
        return {isLoading: false, errors: action.payload, users: []}

    default:
        return state
    }
}