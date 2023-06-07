import { Link } from "react-router-dom";
import error from '../../assets/error_page.jpg'


const Error_Page = () => {
    return (
        <div className="mx-10 text-center mt-10">
            <Link className="btn btn-error text-bold text-white" to='/'>Back to Homepage</Link>
            <img className="mx-auto" src={error} alt="" />
        </div>
    );
};

export default Error_Page;