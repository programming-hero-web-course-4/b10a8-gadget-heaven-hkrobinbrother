import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { createContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import styles

// eslint-disable-next-line react-refresh/only-export-components
export const CountContext = createContext();

const MainLayout = () => {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [wishlist, setWishlist] = useState([]); // State for wishlist

    const handleAddToCart = (product) => {
        const isExist = selectedProducts.find((p) => p.product_id === product.product_id);

        if (isExist) {
            toast.error('😞 Already in cart!', {
                autoClose: 1500,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } else {
            const newProducts = [...selectedProducts, product];
            setSelectedProducts(newProducts);

            toast.success(` 😊${product.product_title} added to cart! 🛒`, {
                autoClose: 1500,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    const handleAddToWishlist = (product) => {
        const isExistInWishlist = wishlist.find((p) => p.product_id === product.product_id);

        if (isExistInWishlist) {
            toast.error('😞 Already in wishlist!', {
                autoClose: 1500,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } else {
            const newWishlist = [...wishlist, product];
            setWishlist(newWishlist);

            toast.success(` 💖${product.product_title} added to wishlist! `, {
                autoClose: 1500,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    return (
        <div>
            <CountContext.Provider
                value={{
                    selectedProducts,
                    setSelectedProducts,
                    handleAddToCart,
                    wishlist,
                    setWishlist,
                    handleAddToWishlist
                }}
            >
                {/* Nav Bar */}
                <Navbar />
                <div className='min-h-[calc(100vh-289px)]'>
                    {/* Dynamic Section */}
                    <Outlet />
                </div>
                <ToastContainer position="top-center" />
                {/* Footer */}
                <Footer />
            </CountContext.Provider>
        </div>
    );
};

export default MainLayout;
