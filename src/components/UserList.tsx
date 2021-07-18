import { FC } from "react"
import { useTypedSelector } from "../store/hooks/useTypedSelector"

const UserList: FC = () => {
    const {users, isLoading, errors} = useTypedSelector(state => state.user)
    console.log(users)
    return (
        <div>

        </div>
    )
}

export default UserList