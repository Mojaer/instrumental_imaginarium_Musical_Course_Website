import ClassCard from "../../../Components/ClassCard/ClassCard";
import useAllClasses from "../../../Components/useAllClasses/useAllClasses";



const ManageAllClasses = () => {
    // const axiosAction = useAxiosAction()
    // const [classes, setClasses] = useState([])

    const classes = useAllClasses()

    // useEffect(() => {
    //     axiosAction.get(`/allClasses`)
    //         .then(res => {
    //             setClasses(res.data)
    //         })
    // }, [axiosAction]);

    // console.log(classes)

    if (!classes) {
        return <div>loading.....</div>
    }

    return (
        <section className="ms-4 grid grid-cols-2 gap-6">
            {classes.map(eachClass => <ClassCard key={eachClass._id} eachClass={eachClass} ></ClassCard>)}
        </section>

    );
};

export default ManageAllClasses