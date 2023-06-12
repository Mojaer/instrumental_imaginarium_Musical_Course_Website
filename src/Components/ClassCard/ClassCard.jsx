import { Link } from "react-router-dom";
import useCurrentUserRole from "../CurrentUserRole/CurrentUserRole";
import useAxiosAction from "../AxiosAction/useAxiosAction";
import { useState } from "react";
import Swal from "sweetalert2";


const ClassCard = ({ eachClass }) => {
    // console.log(eachClass);
    const { ClassImage, ClassName, InstructorName, feedback, InstructorEmail, availableSeats, classStatus, enrolledStudents, price, _id } = eachClass
    const role = useCurrentUserRole()
    const axiosAction = useAxiosAction()
    const [status, setStatus] = useState(classStatus)
    // console.log(role);
    const handleStatus = (status) => {
        axiosAction.patch(`/classStatus/${_id}`, { status: status })
            .then(() => {
                // console.log(res.data)
                alert('status updated')
                setStatus(status);

            })
    }
    const handleFeedback = async () => {
        const { value: text } = await Swal.fire({
            input: 'textarea',
            inputLabel: 'Write Feedback',
            inputPlaceholder: 'Type your message here...',
            inputAttributes: { 'aria-label': 'Type your message here' },
            showCancelButton: true
        })
        if (text) {
            const feedback = { feedback: text }
            axiosAction.patch(`/classFeedback/${_id}`, feedback)
                .then(res => {
                    if (res.data.modifiedCount > 0) {
                        alert('feedback is sent successfully')
                    }
                })


        }
        // axiosAction.patch(`/classFeedback/${_id}`, )
    }

    // console.log(status)

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={ClassImage} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body  text-left">
                <h2 className="card-title font-bold">{ClassName}</h2>
                <p><strong>Available seats :</strong> {availableSeats}</p>
                <p><strong> Class Status :</strong> {status}</p>
                <p><strong> Enrolled students :</strong> {enrolledStudents || 0}</p>
                <p><strong>Price :</strong> {price}</p>
                {role === 'instructor' && feedback ? <p><strong>Feedback :</strong> {feedback}</p> : ''}
                {role === 'admin' && feedback ? <p><strong>Feedback :</strong> {feedback}</p> : ''}
                {/* TODO : Feedback should have if its denies */}
                {role === 'admin' && <>
                    <p><strong>Instructor&apos;s name :</strong> {InstructorName}</p>
                    <p><strong>Instructor&apos;s Email :</strong> {InstructorEmail}</p>
                    <div >
                        <button className="btn btn-success btn-sm" disabled={status !== 'pending'} onClick={() => handleStatus('approved')}>Approve</button>
                        <button className="btn btn-error ms-10 btn-sm" disabled={status !== 'pending'} onClick={() => handleStatus('deny')}>Deny</button>
                    </div>
                    <button className="btn btn-primary btn-md" disabled={status !== 'deny'} onClick={handleFeedback}>Feedback</button>
                </>}

                {role === 'instructor' && <div className="card-actions">
                    <Link to={`/dashboard/updateClass/${_id}`} className="btn btn-primary">Update Class</Link>
                </div>}
            </div>
        </div>
    );
};

export default ClassCard;