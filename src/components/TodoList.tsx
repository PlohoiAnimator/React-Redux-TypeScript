import { useEffect } from "react"
import { useAction } from "../hook/useActions"
import { useTypedSelector } from "../hook/useTypedSelector"

const TodoList: React.FC = () => {
    const {page, error, loading, todos, limit} = useTypedSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useAction()
    const pages = [1,2,3,4,5]

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if(loading) {
        return (<h1>Загрузка...</h1>)
    }

    if(error) {
        return (<h1>{error}</h1>)
    }


    return (
        <div>
            {todos.map(todo => 
                <div key={todo.id}>{todo.id} - {todo.title}</div>    
            )}
            <div style={{display: 'flex'}}>
                {pages.map(p => 
                    <div style={{
                        border: p === page ? '2px solid lightgreen':'1px solid lightgray',
                        padding: 10,
                        cursor: 'pointer'
                    }}
                    onClick={() => setTodoPage(p)}>
                        {p}</div>    
                )}
            </div>
        </div>
    )
}

export default TodoList