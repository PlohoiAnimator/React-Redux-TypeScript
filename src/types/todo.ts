export interface TodoState {
    todos: any[],
    loading: boolean,
    error: null|string,
    page: number,
    limit: number
}

export enum todoActionTypes {
    FETCH_TODOS = 'FETCH_TODO',
    FETCH_TODOS_SUCCESS = 'FETCH_TODO_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODO_ERROR',
    SET_PAGE = 'SET_PAGE'
}

interface FetchTodoAction {
    type: todoActionTypes.FETCH_TODOS
}

interface FetchTodoSuccessAction {
    type: todoActionTypes.FETCH_TODOS_SUCCESS,
    payload: any[]
}

interface FetchTodoErrorAction {
    type: todoActionTypes.FETCH_TODOS_ERROR,
    payload: string
}

interface SetPageAction {
    type: todoActionTypes.SET_PAGE,
    payload: number
}

export type TodoAction = FetchTodoAction | FetchTodoSuccessAction | FetchTodoErrorAction | SetPageAction