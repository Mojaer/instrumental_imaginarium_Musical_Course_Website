import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";


const Dashboard = () => {
    return (
        <>
            <Header></Header>
            <div className="drawer lg:drawer-open drawer-end justify-items-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button mt-5 btn btn-primary">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 rounded-lg mt-4 h-3/4 bg-base-300 text-base-content">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </>

    );
};

export default Dashboard;