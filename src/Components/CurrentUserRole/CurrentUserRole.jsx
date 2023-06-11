
import { useContext } from "react";
import { authContext } from "../../Authentication/authProvider/AuthProvider";
import UseAllUsers from "../useUsers/UseAllUsers";
import { Navigate } from "react-router-dom";


const useCurrentUserRole = () => {
    const { user, userLoading } = useContext(authContext)
    const [allUsers] = UseAllUsers()

    if (userLoading) {
        return <div>loading...........</div>
    }

    const currentUser = allUsers.find(users => users.email === user?.email)
    if (!currentUser) {
        <Navigate to='/' replace={true}></Navigate>
    }
    const role = currentUser?.role
    return role
};

export default useCurrentUserRole;