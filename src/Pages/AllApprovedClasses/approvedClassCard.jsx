import { useContext } from "react";
import useCurrentUserRole from "../../Components/CurrentUserRole/CurrentUserRole";
import { authContext } from "../../Authentication/authProvider/AuthProvider";
import useAxiosAction from "../../Components/AxiosAction/useAxiosAction";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ApprovedClassCard = ({ Class }) => {
    const { ClassImage, ClassName, InstructorEmail, InstructorName, availableSeats, price, _id } = Class
    // console.log(Class)
    const role = useCurrentUserRole()
    const { user, userLoading } = useContext(authContext)
    const axiosAction = useAxiosAction()
    if (userLoading) {
        return <div><img src="../../assets/error_page.jpg" alt="loading" /></div>
    }

    const handleSelect = () => {
        axiosAction.post(`/selectedClass`, {
            ClassName, id: _id, InstructorEmail, InstructorName, ClassImage, price, availableSeats, studentEmail: user.email
        })
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class is selected',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${res.data.message}`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
    }

    // console.log(user, _id)
    return (
        <div className={`card w-80  bg-base-100 ${availableSeats <= 0 ? 'bg-red-500' : 'bg-base-100'}  shadow-xl`}>
            <figure><img className="h-24" src={ClassImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {ClassName}
                </h2>
                <p> <strong>Instructor:</strong> {InstructorName}</p>
                <p> <strong>Available seats:</strong> {availableSeats}</p>
                <p> <strong>Price:</strong> {price}$</p>


                <div className="card-actions justify-end">
                    <div className="badge  ">
                        {
                            user ? <button className="btn btn-sm btn-success"
                                onClick={handleSelect}
                                disabled={role === 'admin' ? true :
                                    role === 'instructor' ? true :
                                        availableSeats <= 0 ? true : false} >
                                Select Course</button> : <Link to='/login'> Login before select the course </Link>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ApprovedClassCard;