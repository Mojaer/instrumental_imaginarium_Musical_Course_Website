import UseAllUsers from "../../../../Components/useUsers/UseAllUsers";


const TopInstructors = () => {

    const [allUsers, allUserLoading] = UseAllUsers();

    // console.log(allUsers)

    // if (allUserLoading) {
    //     return <>loading.....</>
    // }

    const instructors = allUsers.filter(user => user.role === 'instructor')
    instructors.reverse()
    const TopInstructors = instructors.slice(0, 6)
    console.log(TopInstructors);

    return (
        <section>
            <h1 className="text-3xl font-semibold my-10 uppercase text-center">Instructors </h1>
            <div className="grid grid-cols-3 gap-6">
                {
                    TopInstructors.map(instructor => <div key={instructor._id} className="card card-side bg-base-100 shadow-xl">
                        <figure><img className="h-full w-26" src={instructor.imgUrl} alt="Movie" /></figure>
                        <div className="card-body">

                            <h2 className="card-title"> {instructor.name}</h2>
                            <p>Email:{instructor.email}</p>
                        </div>
                    </div>)
                }
            </div>

        </section>
    );
};

export default TopInstructors;