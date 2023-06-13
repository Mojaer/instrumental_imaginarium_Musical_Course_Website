import Swal from "sweetalert2";
import useAxiosAction from "../../../Components/AxiosAction/useAxiosAction";



const SelectedClassCard = ({ Class, setClasses, updatedClasses }) => {
    const axiosAction = useAxiosAction()
    const { ClassImage, ClassName, InstructorName, price, availableSeats, studentEmail, _id } = Class

    // console.log(Class)
    const handleDelete = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'confirm'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosAction.delete(`/selectedClass/${_id}`)
                    .then((() => {
                        // window.location.reload();
                        Swal.fire(
                            'Deleted!',
                            'Your class has been deleted.',
                            'success'
                        )
                        const newClasses = updatedClasses.filter(uClass => uClass._id !== _id);
                        setClasses(newClasses)



                    }))

            }
        })

    };
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
                        <button className="btn btn-sm btn-success" onClick={handleDelete}> Delete</button>
                        <button className="btn btn-sm btn-success ms-4"> Make Payment</button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default SelectedClassCard;