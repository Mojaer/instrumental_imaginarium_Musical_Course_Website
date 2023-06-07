import { useContext, useState } from "react";
import { authContext } from "../../Authentication/authProvider/AuthProvider";
import leftImg from '../../assets/Capture.jpg'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";


const Registration = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [showPass, setShowPass] = useState(false)
    const { googleLogIn, userRegistrations, profileUpdate } = useContext(authContext)

    const onSubmit = data => {
        const name = data.name
        const email = data.email
        const password = data.password
        const url = data.url
        if (password !== repeatPassword) {
            alert('password mismatch')
        }
        else {
            userRegistrations(email, password, name, url)
                .then(() => {
                    profileUpdate(name, url)
                    alert('you are successfully registered')
                }).catch((error) => { alert(error.message) })
        }

    };

    const handleGoogleSignin = () => {
        googleLogIn()
    }

    const password = watch('password');
    const repeatPassword = watch('repeatPassword');

    return (
        <section>
            <div className="container h-full px-6 py-20">
                <div
                    className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                    {/*  Left column container  */}
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12">
                        <img
                            src={leftImg}
                            className="w-full"
                            alt="Phone image" />
                    </div>

                    {/* <!-- Right column container with form --> */}
                    <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* <!-- Name input --> */}
                            <div className="relative mb-6" >
                                <input
                                    type="text"
                                    className="peer relative block min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput3"
                                    placeholder="Name"
                                    {...register("name", { required: true })}
                                />
                                {errors.name && <span className="block text-red-500">Enter your name</span>}
                                <label

                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500   peer-focus:scale-[0.8] peer-focus:text-primary peer-focus:font-semibold -translate-y-[1.15rem] scale-[0.8]"
                                >Name
                                </label>
                            </div>

                            {/* <!-- Email input --> */}
                            <div className="relative mb-6" >
                                <input
                                    type="email"
                                    className="peer relative block min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput3"
                                    placeholder="Email address"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className="block text-red-500">Enter Email</span>}
                                <label

                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500   peer-focus:scale-[0.8] peer-focus:text-primary peer-focus:font-semibold -translate-y-[1.15rem] scale-[0.8]"
                                >Email address
                                </label>
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <input
                                    type={showPass ? 'text' : 'password'}
                                    className="peer relative block min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    placeholder="Password"
                                    {...register("password", { required: true, })} />
                                {errors.password && <span className="block text-red-500">Enter password</span>}

                                <button onClick={(event) => {
                                    event.preventDefault();
                                    setShowPass(!showPass)
                                }}
                                    className="btn btn-xs">
                                    {showPass ? 'Hide password' : 'Show password'}
                                </button>
                                <label
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500   peer-focus:scale-[0.8] peer-focus:text-primary -translate-y-[1.15rem]  peer-focus:font-semibold scale-[0.8]"
                                >Password
                                </label>
                            </div>


                            {/* <!--confirm Password input --> */}
                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <input
                                    type='password'
                                    className="peer relative block min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput33"
                                    placeholder="Password"
                                    {...register("repeatPassword", { required: true, })} />
                                {errors.repeatPassword && <span className="block text-red-500">Enter password</span>}
                                {repeatPassword && password !== repeatPassword && (
                                    <p className="block text-red-500">Passwords do not match</p>)}

                                <label
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500   peer-focus:scale-[0.8] peer-focus:text-primary -translate-y-[1.15rem]  peer-focus:font-semibold scale-[0.8]"
                                >Password
                                </label>
                            </div>

                            {/* <!--Photo Url input --> */}
                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <input
                                    type='url'
                                    className="peer relative block min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput33"
                                    placeholder="Photo url"
                                    {...register("url", { required: true })} />
                                {errors.url && <span className="block text-red-500">Enter Photo Url</span>}

                                <label
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500   peer-focus:scale-[0.8] peer-focus:text-primary -translate-y-[1.15rem]  peer-focus:font-semibold scale-[0.8]"
                                >Photo Url
                                </label>
                            </div>

                            {/* <!-- Submit button --> */}
                            <input
                                type="submit"
                                className="inline-block w-full cursor-pointer rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-400 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                value='Register'>
                            </input>

                            <br />
                            <div className="mb-4 mt-2 ">
                                {/* <!-- register if dont have account --> */}
                                Do not have an account?
                                <Link to='/register' className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                                > Register</Link>
                            </div>
                        </form>

                        {/* <!-- Divider --> */}
                        <div
                            className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                            <p
                                className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                OR
                            </p>
                        </div>

                        {/* <!-- Social login buttons --> */}
                        <button
                            onClick={handleGoogleSignin}
                            className="mb-3 flex w-full btn items-center space-x-2 justify-center rounded ">
                            <FcGoogle className="text-3xl"></FcGoogle>
                            <span> Continue with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Registration;