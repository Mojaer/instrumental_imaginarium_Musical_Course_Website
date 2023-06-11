import { Link } from "react-router-dom";
import useCurrentUserRole from "../CurrentUserRole/CurrentUserRole";
import useAxiosAction from "../AxiosAction/useAxiosAction";
import { useState } from "react";


const ClassCard = ({ eachClass }) => {
    // console.log(eachClass);
    const { ClassImage, ClassName, InstructorName, InstructorEmail, availableSeats, classStatus, enrolledStudents, price, _id } = eachClass
    const role = useCurrentUserRole()
    const axiosAction = useAxiosAction()
    const [Inactive, setInactive] = useState(false)
    // console.log(role);
    const handleStatus = (status) => {
        axiosAction.patch(`/classStatus/${_id}`, { status: status })
            .then((res) => {
                console.log(res.data)
                alert('status updated')
                setInactive(true)

            })
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={ClassImage} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body  text-left">
                <h2 className="card-title">{ClassName}</h2>
                <p><strong>Available seats :</strong> {availableSeats}</p>
                <p><strong> Class Status :</strong> {classStatus}</p>
                <p><strong> Number of students enrolled :</strong> {enrolledStudents}</p>
                <p><strong>Price :</strong> {price}</p>
                {/* TODO : Feedback should have if its denies */}
                {role === 'admin' && <>
                    <p><strong>Instructor&apos;s name :</strong> {InstructorName}</p>
                    <p><strong>Instructor&apos;s Email :</strong> {InstructorEmail}</p>
                    <div >
                        <button className="btn btn-success btn-sm" disabled={Inactive} onClick={() => handleStatus('approved')}>Approve</button>
                        <button className="btn btn-error ms-10 btn-sm" disabled={Inactive} onClick={() => handleStatus('deny')}>Deny</button>
                    </div>
                    <button className="btn btn-primary btn-md">Feedback</button>
                </>}

                {role === 'instructor' && <div className="card-actions">
                    <Link to={`/dashboard/updateClass/${_id}`} className="btn btn-primary">Update Class</Link>
                </div>}
            </div>
        </div>
    );
};

export default ClassCard;