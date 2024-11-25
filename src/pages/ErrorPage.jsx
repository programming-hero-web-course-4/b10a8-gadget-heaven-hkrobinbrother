import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center mt-20">
            <h1>Not Found 404</h1>
            <Link to='/' className="btn btn-warning">Home</Link>
        </div>
    );
};

export default ErrorPage;