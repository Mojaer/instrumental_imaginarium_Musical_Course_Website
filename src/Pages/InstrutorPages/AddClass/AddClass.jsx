import { useContext } from "react";
import { authContext } from "../../../Authentication/authProvider/AuthProvider";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAxiosAction from "../../../Components/AxiosAction/useAxiosAction";


const AddClass = () => {

    const { user, userLoading } = useContext(authContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const axiosAction = useAxiosAction()
    // console.log(user)

    if (userLoading) {
        return <div>loading........</div>
    }

    const onSubmit = (data) => {
        // console.log(data)
        const ClassName = data.clsName
        const availableSeats = data.seats
        const price = data.price
        const InstructorName = user.displayName
        const InstructorEmail = user.email
        // console.log(InstructorName, InstructorEmail)
        const formData = new FormData();
        formData.append('image', data.ClsImg[0]);

        //image upload to imageBB
        axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_API}`, formData)
            .then((data) => {
                const ClassImage = data.data.data.display_url
                const ClassDetail = {
                    ClassName, availableSeats, price, InstructorName, InstructorEmail, ClassImage,
                    classStatus: 'pending', feedback: '', seatBooked: 0
                }
                // console.log(ClassDetail)
                axiosAction.post('/classes', ClassDetail)
                    .then((res) => {
                        if (res.data.insertedId) {
                            alert('Class is successfully inserted')
                            reset()
                        }
                    })
            });
    };

    return (
        <section className="ms-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="font-bold text-3xl">Add Your Class</h1>
                <div className=" md:grid grid-cols-2 items-center  my-2">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" placeholder="Class Name" className="input input-bordered w-full max-w-xs"
                            {...register("clsName", { required: true, maxLength: 100 })} />
                        {errors.clsName && <p className="text-red-500">Enter the name of the class</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input type="file" accept="image/*" className="file-input file-input-bordered w-full max-w-xs"
                            {...register("ClsImg", { required: true })} />
                        {errors.ClsImg && <p className="text-red-500">Insert an image</p>}

                    </div>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" disabled defaultValue={user.displayName} placeholder="Image"
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" placeholder="$" className="input input-bordered w-full max-w-xs"
                            {...register("price", { required: true, maxLength: 20 })} />
                        {errors.price && <p className="text-red-500">Enter the price</p>}

                    </div>
                </div>
                <div className="form-control w-full max-w-xs my-2">
                    <label className="label">
                        <span className="label-text">Instructor Email</span>
                    </label>
                    <input type="email" defaultValue={user.email} disabled placeholder="example@domail.com"
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs my-2">
                    <label className="label">
                        <span className="label-text">Available seats</span>
                    </label>
                    <input type="numbers" placeholder="seats between 1-30" className="input input-bordered w-full max-w-xs"
                        {...register("seats", { required: true, min: 1, max: 30 })} />
                    {errors.seats && <p className="text-red-500">Number of seats must be 5-30</p>}

                </div>
                <input className="btn btn-success btn-md mt-5" type="submit" value="Add Class" />
            </form>
        </section>
    );
};

export default AddClass;