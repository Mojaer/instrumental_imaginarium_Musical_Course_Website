import { Link } from "react-router-dom";


const ClassCard = ({ eachClass }) => {
    console.log(eachClass);
    const { ClassImage, ClassName, availableSeats, classStatus, enrolledStudents, price, _id } = eachClass


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={ClassImage} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{ClassName}</h2>
                <p>Available seats : {availableSeats}</p>
                <p> Class Status : {classStatus}</p>
                <p> Number of students enrolled : {enrolledStudents}</p>
                <p>Price : {price}</p>
                {/* TODO : Feedback should have if its denies */}
                <div className="card-actions">
                    <Link to={`/dashboard/updateClass/${_id}`} className="btn btn-primary">Update Class</Link>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;