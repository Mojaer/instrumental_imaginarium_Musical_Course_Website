import { useContext } from "react";
import Banner from "../Banner/Banner";
import PopularClasses from "./PopularClasses/PopularClasses";
import StudentsPerformance from "./StudentsPerformace/StudentsPerformace";
import TopInstructors from "./TopInstructors/TopInstructors";
import { themeContext } from "../../../Authentication/darkThemeProvider/ThemeProvider";
import Reviews from "./Reviews/Reviews";
import Sales from "./Sales/Sales";



const Home = () => {
    const { theme } = useContext(themeContext)
    return (
        <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <TopInstructors></TopInstructors>
            <Reviews></Reviews>
            <Sales></Sales>
            <StudentsPerformance></StudentsPerformance>
        </div>
    );
};

export default Home;