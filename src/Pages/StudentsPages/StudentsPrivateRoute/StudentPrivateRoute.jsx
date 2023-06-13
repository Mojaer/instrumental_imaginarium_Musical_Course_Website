
import useCurrentUserRole from '../../../Components/CurrentUserRole/CurrentUserRole';
import { Navigate } from 'react-router-dom';

const StudentPrivateRoute = ({ children }) => {
    const role = useCurrentUserRole()

    if (role === 'student') {
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

export default StudentPrivateRoute;