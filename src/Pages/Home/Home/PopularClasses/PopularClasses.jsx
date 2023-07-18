import useAllClasses from "../../../../Components/useAllClasses/useAllClasses";


const PopularClasses = () => {
    const classes = useAllClasses()
    const Classes = classes.filter(Class => Class.classStatus === "approved")
    const popularClasses = Classes.sort((a, b) => b.seatBooked - a.seatBooked)
    const slicedClass = popularClasses.slice(0, 6)

    return (

        <section>
            <h1 className="text-3xl font-semibold my-10 uppercase text-center">Our Popular Courses </h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                {
                    slicedClass.map(Class =>
                        <div key={Class._id} className="card mx-auto w-full md:w-80 bg-slate-100 shadow-xl image-full">
                            <figure><img className="h-20" src={Class.ClassImage} alt="Shoes" /></figure>
                            <div className="md:card-body w-full z-5 ">
                                <h2 ><strong>Course: </strong> {Class.ClassName}</h2>
                                <h2 ><strong>Students: </strong> {Class.seatBooked}</h2>
                            </div>
                        </div>
                    )
                }

            </div>
        </section>
    );
};

export default PopularClasses;