import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CountContext } from "../layouts/MainLayout";


const Navbar = () => {

    const navigate = useNavigate();

    const { selectedProducts, wishlist } = useContext(CountContext);



    const location = useLocation();

    const isHome = location.pathname === '/';
    const isCategory = location.pathname.startsWith('/category/');
    const bgColor = isHome || isCategory ? 'bg-primary' : 'bg-white';
    const textColor = isHome || isCategory ? 'lg:text-white text-black' : 'text-black';


    const handlenavi = () => {
        navigate('/dashboard')
    }

    return (
        <div className={`${bgColor} rounded-t-2xl w-11/12 mx-auto px-12 mt-5 shadow-lg`}>
            {/* Mobile Logo */}
            <Link to='/' className={`text-xl font-bold md:hidden text-center ${textColor}`}>
                <h1 className="mt-5 pt-5">Gadget Heaven</h1>
            </Link>

            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    {/* Mobile Dropdown Menu */}
                    <div className="dropdown">
                        <button tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow-lg z-[1]">
                            <NavLink to='/' className={({ isActive }) => `${textColor} ${isActive ? 'underline' : ''}`}>Home</NavLink>
                            <NavLink to='/statistics' className={({ isActive }) => `${textColor} ${isActive ? 'underline' : ''}`}>Statistics</NavLink>
                            <NavLink to='/dashboard' className={({ isActive }) => `${textColor} ${isActive ? 'underline' : ''}`}>Dashboard</NavLink>
                            <NavLink to='/faq' className={({ isActive }) => `${textColor} ${isActive ? 'underline' : ''}`}>FAQ</NavLink>
                        </ul>
                    </div>

                    {/* Desktop Logo */}
                    <Link to='/' className={`text-xl font-bold hidden md:block ${textColor}`}>
                        Gadget Heaven
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center gap-10">
                        <NavLink to='/' className={({ isActive }) => `${textColor} ${isActive ? 'underline' : ''}`}>Home</NavLink>
                        <NavLink to='/statistics' className={({ isActive }) => `${textColor} ${isActive ? 'underline' : ''}`}>Statistics</NavLink>
                        <NavLink to='/dashboard' className={({ isActive }) => `${textColor} ${isActive ? 'underline' : ''}`}>Dashboard</NavLink>
                        <NavLink to='/faq' className={({ isActive }) => `${textColor} ${isActive ? 'underline' : ''}`}>FAQ</NavLink>
                    </ul>
                </div>

                {/* Action Buttons */}
                <div className="navbar-end">
                    <div className="flex gap-4 items-center">
                        <div className=" relative">
                            <p className="  rounded-lg absolute -top-2 right-1 text-red-400 font-bold">{selectedProducts.length}</p>
                            <button onClick={handlenavi} className="bg-white border w-10 h-10 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-100">

                                <i className="fa-solid fa-cart-shopping text-gray-600"></i>
                            </button>
                        </div>
                        <div className="relative">
                            <p className="  rounded-lg absolute -top-2 right-1 text-red-400 font-bold">{wishlist.length}</p>
                            <button className="bg-white border w-10 h-10 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-100">
                                <i className="fa-regular fa-heart text-gray-600"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
