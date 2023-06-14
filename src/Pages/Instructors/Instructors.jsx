import UseAllUsers from "../../Components/useUsers/UseAllUsers";



const Instructors = () => {
    const [allUsers, allUserLoading] = UseAllUsers()
    const instructors = allUsers.filter(user => user.role === 'instructor')
    // console.log(instructors)
    if (allUserLoading) {
        return <div>
            <img src="../../assets/loading.gif" alt="" />
        </div>
    }
    return (<>
        <h1 className="text-3xl font-semibold my-10 uppercase text-center">Our Instructors </h1>
        <section className="grid grid-cols-3 gap-6 my-10">
            {instructors.map(instructor =>
                <div key={instructor._id} className="card w-80 bg-base-100 shadow-xl text-center ">
                    <figure><img referrerPolicy="no-referrer" className="h-32 w-36" src={instructor.imgUrl || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} alt="instructor" /></figure>
                    <div className="card-body">
                        <h2 className="text-lg font-semibold">{instructor.name}</h2>
                        <p><strong>Email:</strong> {instructor.email}</p>
                    </div>
                </div>


            )
            }
        </section>
    </>

    )
};

export default Instructors;