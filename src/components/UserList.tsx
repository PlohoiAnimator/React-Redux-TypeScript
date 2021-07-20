import { useEffect } from "react";
import { FC } from "react";
import { useAction } from "../hook/useActions";
import { useTypedSelector } from "../hook/useTypedSelector";

const UserList: FC = () => {
    const {error, loading, users} = useTypedSelector(state => state.user)
    const {fetchUsers} = useAction()

    useEffect(() => {
        fetchUsers()
    }, [])

    if(loading) {
        return (
            <h1>Загрузка...</h1>
        )
    }

    if(error) {
        return (
            <h1>{error}</h1>
        )
    }
    return (
        <div>
            {users.map(user => 
                <h3 key={user.id}>{user.name}</h3>    
            )}
        </div>
    )
}

export default UserList