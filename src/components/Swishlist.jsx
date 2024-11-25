import { useContext, useState } from "react";
import { CountContext } from "../layouts/MainLayout";

// eslint-disable-next-line react/prop-types
const Swishlist = ({ product, RemoveWishlist, setWishlist }) => {

    // eslint-disable-next-line react/prop-types
    const { product_title, product_image, price, description } = product;
    const { selectedProducts, setSelectedProducts } = useContext(CountContext);


    const [message, setMessage] = useState('');

    const handleAddToCart = (product) => {

        // eslint-disable-next-line react/prop-types
        const isProductInCart = selectedProducts.some(selectedProduct => selectedProduct.product_id === product.product_id);

        if (!isProductInCart) {

            setSelectedProducts(prevProducts => [...prevProducts, product]);


            // eslint-disable-next-line react/prop-types
            setWishlist(prevWishlist => prevWishlist.filter(item => item.product_id !== product.product_id));


            setMessage(`${product_title} has been added to the cart.`);
        } else {

            setMessage(`${product_title} is already in the cart.`);
        }


        setTimeout(() => {
            setMessage('');
        }, 3000);
    };

    return (
        <div className="md:w-4/5 mx-auto px-5">
            <div className="border flex items-center justify-between rounded-lg bg-slate-50 p-4 shadow-md">
                <div className="flex items-center gap-5">
                    <div>
                        <img className="w-20 h-20 rounded-2xl" src={product_image} alt="Product Image" />
                    </div>
                    <div>
                        <h1 className="text-xl font-medium">{product_title}</h1>
                        <p className="text-sm mt-3 text-[#717171]">{description}</p>
                        <p className="pt-3">Price: ${price}</p>
                        <button onClick={() => handleAddToCart(product)} className="btn-xs btn text-white bg-primary rounded-full">
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div>
                    <i
                        className="fa-regular fa-trash-can text-red-600 text-2xl cursor-pointer"
                        onClick={() => RemoveWishlist(product)}
                    ></i>
                </div>
            </div>
            {/* Displaying the message */}
            {message && (
                <div className="mt-2 text-red-500 font-semibold">
                    {message}
                </div>
            )}
        </div>
    );
};

export default Swishlist;
