
import { Navigate } from "react-router-dom";
import useCurrentUserRole from "../../../Components/CurrentUserRole/CurrentUserRole";


const AdminPrivateRoute = ({ children }) => {

    const role = useCurrentUserRole()

    if (role === 'admin') {
        return (
            <div>
                {children}
            </div>
        );
    }
    else {
        <Navigate to='/' replace={true}></Navigate>
    }
};

export default AdminPrivateRoute;