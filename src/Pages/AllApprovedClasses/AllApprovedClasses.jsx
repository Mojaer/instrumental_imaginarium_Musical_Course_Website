import useAllClasses from "../../Components/useAllClasses/useAllClasses";
import ApprovedClassCard from "./approvedClassCard";


const AllApprovedClasses = () => {
    const classes = useAllClasses()
    const approvedClasses = classes.filter(Class => Class.classStatus === 'approved')
    // console.log(approvedClasses)
    return (
        <section className="grid grid-cols-3 gap-8 my-10">
            {
                approvedClasses.map(Class => <ApprovedClassCard key={Class._id}
                    Class={Class}
                ></ApprovedClassCard>)
            }
        </section>
    )
};

export default AllApprovedClasses;