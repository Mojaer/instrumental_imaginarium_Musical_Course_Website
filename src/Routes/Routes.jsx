import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Error_Page from "../Shared/404_Not_Found/Error_Page";
import Dashboard from "../Layout/Dashboard/Dashboard";
import UserManage from "../Pages/AdminPages/UserManage";
import AdminPrivateRoute from "../Pages/AdminPages/AdminPrivateRoute/AdminPrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,

            },
            {
                path: "/login",
                element: <Login></Login>,

            },
            {
                path: "/register",
                element: <Registration></Registration>,

            },
        ],
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "userManage",
                element: <AdminPrivateRoute> <UserManage></UserManage></AdminPrivateRoute>
            }
        ]
    },
    {
        path: "*",
        element: <Error_Page></Error_Page>,
    },
]);


export default router;