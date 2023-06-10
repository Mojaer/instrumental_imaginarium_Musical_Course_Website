import useCurrentUserRole from '../../../Components/CurrentUserRole/CurrentUserRole';
import { Navigate } from 'react-router-dom';

const InstructorPrivateRoute = ({ children }) => {
    const role = useCurrentUserRole()

    if (role === 'instructor') {
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

export default InstructorPrivateRoute;