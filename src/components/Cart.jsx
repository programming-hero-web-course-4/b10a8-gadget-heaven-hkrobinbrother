import { useContext, useState } from "react";
import { CountContext } from "../layouts/MainLayout";
import SingleCart from "./SingleCart";
import { useNavigate } from "react-router-dom";
import modalLogo from '../assets/Group.png';

const Cart = () => {
    const { selectedProducts, setSelectedProducts } = useContext(CountContext);
    const [sortedProducts, setSortedProducts] = useState(selectedProducts);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0); // State to hold the total price
    const [activeButton, setActiveButton] = useState(null); // State to track active button
    const navigate = useNavigate();

    // Sort products by price
    const handleSortByPrice = () => {
        const sorted = [...selectedProducts].sort((a, b) => b.price - a.price);
        setSortedProducts(sorted);
        setActiveButton('sort'); // Set active button to sort
    };

    const handlePurchaseClick = () => {
        const total = sortedProducts.reduce((total, product) => total + product.price, 0);
        setTotalPrice(total); // Calculate and set the total price
        setIsModalOpen(true);
        setActiveButton('purchase'); // Set active button to purchase
    };

    // Closing Modal
    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedProducts([]);
        navigate('/');
    };

    // Handle product removal
    const handleRemoveProduct = (productToRemove) => {
        const updatedProducts = selectedProducts.filter(product => product.product_id !== productToRemove.product_id);
        setSelectedProducts(updatedProducts);
        setSortedProducts(updatedProducts);
    };

    return (
        <div className="mt-10">
            <div className="flex justify-between md:w-4/5 mx-auto items-center px-5">
                <h1 className="text-xl font-bold">Cart</h1>
                <div className="flex items-center gap-10">
                    <h1 className="font-bold">Total cost: {sortedProducts.reduce((total, product) => total + product.price, 0)}</h1>
                    <div className="flex gap-2">
                        <button
                            className={`btn hidden md:block rounded-full ${activeButton === 'sort' ? 'bg-purple-100 text-primary' : 'bg-purple-500 text-white'}`}
                            onClick={handleSortByPrice}
                        >
                            Sort by Price
                        </button>
                        <button
                            className={`btn hidden md:block rounded-full ${activeButton === 'purchase' ? 'bg-purple-100 text-primary' : 'bg-purple-500 text-white'}`}
                            onClick={handlePurchaseClick}
                        >
                            Purchase
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-5 gap-2">
                <button
                    className={`btn md:hidden rounded-full ${activeButton === 'sort' ? 'bg-blue-500' : 'btn-warning'}`}
                    onClick={handleSortByPrice}
                >
                    Sort by Price
                </button>
                <button
                    className={`btn md:hidden rounded-full ${activeButton === 'purchase' ? 'bg-blue-500' : 'btn-warning'}`}
                    onClick={handlePurchaseClick}
                >
                    Purchase
                </button>
            </div>
            <div className="flex flex-col gap-5 my-10">
                {sortedProducts.map(product => (
                    <SingleCart
                        product={product}
                        key={product.product_id}
                        handleRemoveProduct={handleRemoveProduct}
                    />
                ))}
            </div>

            {/* Modal Purchase */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded-xl">
                        <div className="flex flex-col justify-center items-center">
                            <div>
                                <img src={modalLogo} alt="" />
                            </div>
                            <h2 className="text-2xl font-bold">Payment Successfully</h2>
                            <p className="text-gray-500">Thanks for purchasing.</p>
                            <p className="text-gray-500">Total: ${totalPrice}</p>
                            <div className="flex justify-end gap-2 mt-4">
                                <button className="btn bg-primary" onClick={handleModalClose}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
