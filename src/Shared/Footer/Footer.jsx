import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/instrumental-imaginarium.jpg'
import { useContext } from 'react';
import { themeContext } from '../../Authentication/darkThemeProvider/ThemeProvider';
import './Footer.css'

const Footer = () => {
    const { theme } = useContext(themeContext)
    return (
        <footer className={`bg-gray-100 py-10 rounded-md p-6 ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
            <div className="container mx-auto md:flex items-center justify-between">
                <div className="ms-4 text-center">
                    <img src={logo} alt="Company Logo" className="w-24 h-8 mx-auto" />
                    <p className="text-slate-800 ">instrumental-imaginarium</p>
                </div>
                <div className="flex items-center space-x-4 ">
                    <a href="#" target="_blank" >
                        <FaFacebook className="text-blue-600 text-3xl" />
                    </a>
                    <a href="#" target="_blank" >
                        <FaInstagram className="text-red-600 text-3xl" />
                    </a>
                    <a href="#" target="_blank" >
                        <FaLinkedin className="text-blue-900 text-3xl" />
                    </a>
                </div>
                <div className="text-center md:text-left">
                    <p className="text-slate-800">Contact us:</p>
                    <p className="text-slate-800">123 Street, Dhaka,Bangladesh</p>
                    <p className="text-slate-800">Phone: 123-456-7890</p>
                    <p className="text-slate-800">Email:instrumental.imaginarium@hot.com </p>
                </div>

            </div>
            <small className="text-slate-800 text-center">© 2023 Company Name. All rights reserved.</small>
        </footer>
    )
};

export default Footer;