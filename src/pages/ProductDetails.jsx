import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { CountContext } from "../layouts/MainLayout";
import { toast } from "react-toastify";

const ProductDetails = () => {
    const { product_id } = useParams();
    const id = parseInt(product_id);
    const data = useLoaderData();
    const product = data.find((product) => product.product_id === id);

    const { product_title, product_image, availability, price, description, Specification, rating } = product;
    const { handleAddToCart, handleAddToWishlist } = useContext(CountContext);

    const handleAddToCartClick = () => {
        if (availability) {
            handleAddToCart(product);

        } else {
            toast.error('Out of Stock')
        }
    };

    return (
        <div>
            <div className="bg-primary">
                <div className="flex flex-col justify-center items-center text-center pt-8 pb-[160px]">
                    <h1 className="text-3xl text-white font-semibold">Product Details</h1>
                    <p className="text-gray-200 mt-3">
                        Discover amazing gadgets designed to boost your experience. From innovative devices to <br className="hidden md:block" /> essential accessories, we’ve got everything covered!
                    </p>
                </div>
            </div>

            <div className="relative items-center border shadow-lg bg-white -top-32 flex justify-self-center rounded-2xl p-5 backdrop-blur-3xl mx-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="">
                        <img src={product_image} className="md:w-[400px] w-80 md:h-[350px]" alt={product_title} />
                    </div>
                    <div className="space-y-3">
                        <h1 className="md:text-3xl text-xl font-bold">{product_title}</h1>
                        <p className="font-semibold">Price: $ {price}</p>
                        <p className={`btn ${availability ? 'text-[#309C08] bg-[#EAF5E6]' : 'text-red-500 bg-red-100'} btn-xs`}>
                            {availability ? 'In Stock' : 'Out of Stock'}
                        </p>
                        <p className="text-gray-500"><small>{description}</small></p>
                        <h1 className="font-semibold">Specification:</h1>

                        <div>
                            <ul className="list-decimal ml-5">
                                {Specification.map((speci, index) => (
                                    <li key={index}>{speci}</li>
                                ))}
                            </ul>
                        </div>
                        <h1 className="font-semibold">Rating ⭐:</h1>
                        <div className="rating flex items-center gap-2">
                            {[...Array(5)].map((_, index) => (
                                <input
                                    key={index}
                                    type="radio"
                                    name="rating-2"
                                    className={`mask mask-star-2 ${index < rating ? 'bg-orange-400' : 'bg-gray-200'}`}
                                    readOnly
                                    checked={index < rating}
                                />
                            ))}
                            <kbd className="rounded-xl bg-slate-50 border p-1">{rating}</kbd>
                        </div>
                        <div className="flex gap-5 items-center ">
                            <button onClick={handleAddToCartClick} className="font-bold text-center text-white btn bg-primary rounded-full hover:bg-purple-800">
                                <p>Add To Cart</p>
                                <i className="fa-solid text-xl fa-cart-shopping"></i>
                            </button>
                            <button onClick={() => handleAddToWishlist(product)} className="bg-white border w-10 h-10 rounded-full">
                                <i className="fa-regular text-2xl fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
