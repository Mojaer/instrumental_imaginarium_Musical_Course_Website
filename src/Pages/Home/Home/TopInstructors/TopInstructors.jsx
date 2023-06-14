import { useContext } from "react";
import UseAllUsers from "../../../../Components/useUsers/UseAllUsers";
import { themeContext } from "../../../../Authentication/darkThemeProvider/ThemeProvider";


const TopInstructors = () => {

    const [allUsers, allUserLoading] = UseAllUsers();
    const { theme } = useContext(themeContext)

    // console.log(allUsers)

    if (allUserLoading) {
        return <>loading.....</>
    }

    const instructors = allUsers.filter(user => user.role === 'instructor')
    instructors.reverse()
    const topInstructors = instructors.slice(0, 6)
    // console.log(topInstructors);

    return (
        <section className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
            <h1 className="text-3xl font-semibold my-10 uppercase text-center">Instructors </h1>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    topInstructors.map((instructor) => <div key={instructor._id} className="card card-side bg-base-100 shadow-xl">
                        <figure><img className="h-full w-26" src={instructor.imgUrl} alt="Movie" /></figure>
                        <div className="card-body">

                            <h2 className="card-title"> {instructor.name}</h2>
                            <p>Email:{instructor.email}</p>
                        </div>
                    </div>
                    )
                }
            </div>

        </section>
    );
};

export default TopInstructors;