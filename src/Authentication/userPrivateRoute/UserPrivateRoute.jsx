import { useContext } from "react";
import { authContext } from "../authProvider/AuthProvider";
import { useNavigate } from "react-router-dom";


function UserPrivateRoute({ children }) {
    const { user, userLoading } = useContext(authContext)
    const navigate = useNavigate()
    if (userLoading) {
        return <div>loading....</div>
    }
    if (user)
        return children;
    else {
        navigate('/login')
    }
}

export default UserPrivateRoute;