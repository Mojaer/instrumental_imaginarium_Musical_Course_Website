import { useContext } from "react";
import useCurrentUserRole from "../../Components/CurrentUserRole/CurrentUserRole";
import { authContext } from "../../Authentication/authProvider/AuthProvider";
import useAxiosAction from "../../Components/AxiosAction/useAxiosAction";


const ApprovedClassCard = ({ Class }) => {
    const { ClassImage, ClassName, InstructorName, availableSeats, price, _id } = Class
    const role = useCurrentUserRole()
    const { user, userLoading } = useContext(authContext)
    const axiosAction = useAxiosAction()
    if (userLoading) {
        return <div><img src="../../assets/error_page.jpg" alt="loading" /></div>
    }

    const handleSelect = () => {
        axiosAction.post(`/selectedClass`, {
            ClassName, id: _id, InstructorName, ClassImage, price, availableSeats, studentEmail: user.email
        })
            .then(res => {
                if (res.data.insertedId) {
                    alert('class is selected')
                } else {
                    alert(res.data.message)
                }

            })
    }

    // console.log(user, _id)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={ClassImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {ClassName}
                </h2>
                <p> <strong>Instructor:</strong> {InstructorName}</p>
                <p> <strong>Available seats:</strong> {availableSeats}</p>
                <p> <strong>Price:</strong> {price}$</p>


                <div className="card-actions justify-end">
                    <div className="badge  ">
                        <button className="btn btn-sm btn-success"
                            onClick={handleSelect}
                            disabled={role === 'admin' ? true :
                                role === 'instructor' ? true :
                                    availableSeats <= 0 ? true : false} >
                            Select Course</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ApprovedClassCard;