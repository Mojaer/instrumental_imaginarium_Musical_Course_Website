import { Link, Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import useCurrentUserRole from "../../Components/CurrentUserRole/CurrentUserRole";


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
                    <ul className="menu p-4 w-60 rounded-lg mt-20 lg:mt-7 h-3/4 bg-base-300 text-base-content">
                        {/* Sidebar content here */}
                        {
                            role === 'admin' ?
                                <>
                                    <li><Link to=''>Manage classes</Link></li>
                                    <li><Link to='/dashboard/userManage'>Manage Users</Link></li>
                                </> :
                                role === 'instructor' ?
                                    <>
                                        <li><Link to=''>instructor</Link></li>
                                        <li><Link to='/dashboard/userManage'>Manage Users</Link></li>
                                    </> :
                                    <>
                                        <li><Link to=''>student</Link></li>
                                        <li><Link to='/dashboard/userManage'>Manage Users</Link></li>
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