import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Error_Page from "../Shared/404_Not_Found/Error_Page";
import Dashboard from "../Layout/Dashboard/Dashboard";
import UserManage from "../Pages/AdminPages/UserManage";
import AdminPrivateRoute from "../Pages/AdminPages/AdminPrivateRoute/AdminPrivateRoute";
import AddClass from "../Pages/InstrutorPages/AddClass/AddClass";
import MyClasses from "../Pages/InstrutorPages/MyClasses/MyClasses";
import InstructorPrivateRoute from "../Pages/InstrutorPages/InstructorPrivateRoute/InstructorPrivateRoute";
import UpdateClass from "../Pages/InstrutorPages/UpdateClass/UpdateClass";
import ManageAllClasses from "../Pages/AdminPages/manageAllClasses/manageAllClasses";
import Instructors from "../Pages/Instructors/Instructors";

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
                path: "/instructors",
                element: <Instructors></Instructors>,

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
            },
            {
                path: "manageAllClasses",
                element: <AdminPrivateRoute><ManageAllClasses></ManageAllClasses> </AdminPrivateRoute>
            },
            {
                path: "addClass",
                element: <InstructorPrivateRoute><AddClass></AddClass></InstructorPrivateRoute>
            },
            {
                path: "myClasses",
                element: <InstructorPrivateRoute><MyClasses></MyClasses></InstructorPrivateRoute>
            },
            {
                path: "updateClass/:id",
                element: <InstructorPrivateRoute><UpdateClass></UpdateClass> </InstructorPrivateRoute>
            },
        ]
    },
    {
        path: "*",
        element: <Error_Page></Error_Page>,
    },
]);


export default router;