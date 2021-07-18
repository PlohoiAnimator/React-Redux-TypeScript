import { UserActions, UserAction, UserState } from "../../types/user"

const initialState = {
    users: [],
    isLoading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserActions):UserState => {
    switch(action.type) {

        case UserAction.FETCH_USERS:
            return {users: [], isLoading: true, error: null}
        
        case UserAction.FETCH_USERS_SUCCESS:
            return {users: action.payload, isLoading: false, error: null}
            
        case UserAction.FETCH_USERS_ERROR:
            return {users: [], isLoading: false, error: action.payload}
                    
         default:
            return state
    }
}