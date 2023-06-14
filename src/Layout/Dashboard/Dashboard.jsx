import { NavLink, Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import useCurrentUserRole from "../../Components/CurrentUserRole/CurrentUserRole";
import './Dashboard.css'


const Dashboard = () => {

    const role = useCurrentUserRole()
    return (
        <>
            <Header></Header>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-4" className="drawer-button btn mt-5 btn-primary visible lg:hidden">Open drawer</label>
                    {/* Page content here */}
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 rounded-lg mt-20 lg:mt-20 h-2/4 bg-base-300 text-base-content">
                        {/* Sidebar content here */}
                        {
                            role === 'admin' ?
                                <>
                                    <li><NavLink to='/dashboard/manageAllClasses'>Manage classes</NavLink></li>
                                    <li><NavLink to='/dashboard/userManage'>Manage Users</NavLink></li>
                                </> :
                                role === 'instructor' ?
                                    <>
                                        <li><NavLink to='/dashboard/addClass'>Add a class</NavLink></li>
                                        <li><NavLink to='/dashboard/myClasses'>My Classes</NavLink></li>
                                    </> :
                                    <>
                                        <li><NavLink to='/dashboard/selectedClass'>My Selected Classes</NavLink></li>
                                        <li><NavLink to='/dashboard/enrolledClass'>My Enrolled Classes</NavLink></li>
                                        <li><NavLink to='/dashboard/paymentHistory'>Payment History</NavLink></li>
                                    </>
                        }
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </>

    );
};

export default Dashboard;