import { Link, NavLink } from "react-router-dom";
import navImg from '../../assets/instrumental-imaginarium.jpg'
import { useContext } from "react";
import { authContext } from "../../Authentication/authProvider/AuthProvider";
import useCurrentUserRole from "../../Components/CurrentUserRole/CurrentUserRole";
import { themeContext } from "../../Authentication/darkThemeProvider/ThemeProvider";
import { BsFillMoonFill } from "react-icons/bs";
import './Header.css'



const Header = () => {

    const { user, userLoading, userLogout } = useContext(authContext)
    const role = useCurrentUserRole()
    // console.log(user)

    const navItems =
        <>
            <NavLink to='/'>Home</NavLink>
            <NavLink className='md:ms-4' to='/instructors'>Instructors</NavLink>
            <NavLink className='md:ms-4' to='/approvedClasses'>Classes</NavLink>
            {user ? <NavLink to={role === 'admin' ? '/dashboard/userManage' : role === 'instructor' ? '/dashboard/addClass' : '/dashboard/selectedClass'}
                className='md:ms-4'>Dashboard</NavLink> : ''}
        </>

    const handleUserLogOut = () => {
        userLogout();
    }

    //handle theme
    const { theme, toggleTheme } = useContext(themeContext)
    const handleTheme = () => {
        toggleTheme();
    };

    if (userLoading) {
        return <div className="h-14 w-14 text-center"><img src="../../assets/loading.gif" alt="" /></div>
    }

    return (
        <div className={`navbar bg-base-100 sticky top-0 z-30 ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img className="w-full h-full" src={navImg} alt="logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end" title={user?.displayName}>
                <div >
                    <button className="mr-3 bg-slate-800" onClick={handleTheme}><BsFillMoonFill></BsFillMoonFill></button>
                </div>

                {user ?
                    <>
                        <button className="btn btn-error btn-sm font-bold " onClick={handleUserLogOut}>Log Out</button>
                        <summary className=""><img className="rounded-full w-12 h-12 ms-3" referrerPolicy="no-referrer" src={user?.photoURL} alt="user-image" /> </summary>
                    </>
                    : <Link to='/login' className="btn">Login</Link>}
            </div>
        </div>
    );
};

export default Header;