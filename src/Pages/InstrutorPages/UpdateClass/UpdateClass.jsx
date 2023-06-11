import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../Authentication/authProvider/AuthProvider";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAxiosAction from "../../../Components/AxiosAction/useAxiosAction";
import { useParams } from "react-router-dom";


const UpdateClass = () => {

    const { userLoading } = useContext(authContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const axiosAction = useAxiosAction()
    const [Class, setClass] = useState(null)

    const { id } = useParams()
    // console.log(id)
    useEffect(() => {
        axiosAction.get(`/classes/${id}`)
            .then(res => setClass(res.data))
    }, [id, axiosAction])



    if (userLoading || !Class) {
        return <div>loading........</div>
    }


    const { ClassImage, ClassName, availableSeats, price } = Class

    const onSubmit = (data) => {
        // console.log(data)
        const updateClassName = data.clsName
        const updateAvailableSeats = data.seats
        const updatePrice = data.price
        const formData = new FormData();
        formData.append('image', data.ClsImg[0]);

        //image upload to imageBB
        axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_API}`, formData)
            .then((data) => {
                const ClassImg = data.data.data.display_url
                const ClassUpdate = {
                    updateClassName, updateAvailableSeats, updatePrice, ClassImg,
                }
                // console.log(ClassUpdate)
                axiosAction.patch(`/classes/${id}`, ClassUpdate)
                    .then((res) => {
                        if (res.data.modifiedCount > 0) {
                            alert('Class is successfully updated')
                        }
                    })
            }).catch((err) => {
                if (err.response.status === 400) {
                    const ClassUpdate = {
                        updateClassName, updateAvailableSeats, updatePrice, ClassImg: ClassImage
                    }
                    axiosAction.patch(`/classes/${id}`, ClassUpdate)
                        .then((res) => {

                            if (res.data.modifiedCount > 0) {
                                alert('Class is successfully updated')
                            }
                        })
                }
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
                        <input type="text" placeholder="Class Name" defaultValue={ClassName} className="input input-bordered w-full max-w-xs"
                            {...register("clsName", { required: true, maxLength: 20 })} />
                        {errors.clsName && <p className="text-red-500">Enter the name of the class</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input type="file" accept="image/*" className="file-input file-input-bordered w-full max-w-xs"
                            {...register("ClsImg", { required: false })} />
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" placeholder="$" defaultValue={price} className="input input-bordered w-full max-w-xs"
                            {...register("price", { required: true, maxLength: 20 })} />
                        {errors.price && <p className="text-red-500">Enter the price</p>}

                    </div>
                </div>
                <div className="form-control w-full max-w-xs my-2">
                    <label className="label">
                        <span className="label-text">Available seats</span>
                    </label>
                    <input type="numbers" placeholder="seats between 5-30" defaultValue={availableSeats} className="input input-bordered w-full max-w-xs"
                        {...register("seats", { required: true, min: 5, max: 30 })} />
                    {errors.seats && <p className="text-red-500">Number of seats must be 5-30</p>}
                </div>
                <input className="btn btn-success btn-md mt-5" type="submit" value="Update Class" />
            </form>
        </section>
    );
};

export default UpdateClass;