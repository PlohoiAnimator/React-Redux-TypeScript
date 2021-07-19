import { useEffect } from "react"
import { FC } from "react"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../hook/useTypedSelector"
import { fetchUsers } from "../store/action-creators/user"

const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user)
    console.log(users, loading, error)
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if(loading) {
        return (
            <div>Загрузка...</div>
        )
    }

    if(error) {
        return error
    }

    return (
        <div>
            {users.map(user => 
                <div>{user.name}</div>    
            )}
        </div>
    )
}

export default UserList