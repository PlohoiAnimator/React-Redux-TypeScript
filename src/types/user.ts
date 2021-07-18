export interface UserState {
    users: any[],
    isLoading: boolean,
    error: null | string
}

export enum UserAction {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

interface FetchUsersAction {
    type: UserAction.FETCH_USERS
}

interface FetchUsersSuccessAction {
    type: UserAction.FETCH_USERS_SUCCESS,
    payload: any[]
}

interface FetchUsersErrorAction {
    type: UserAction.FETCH_USERS_ERROR,
    payload: string
}

export type UserActions = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction