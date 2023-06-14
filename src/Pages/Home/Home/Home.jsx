import Banner from "../Banner/Banner";
import PopularClasses from "./PopularClasses/PopularClasses";
import TopInstructors from "./TopInstructors/TopInstructors";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <TopInstructors></TopInstructors>
        </div>
    );
};

export default Home;