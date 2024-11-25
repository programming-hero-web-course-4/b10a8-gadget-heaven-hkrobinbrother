import { useState } from "react";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";

const Dashboard = () => {
    const [activeComponent, setActiveComponent] = useState("cart");



    return (
        <div>
            <div className="bg-primary">
                <div className="flex flex-col justify-center items-center text-center pt-8 pb-[50px]">
                    <h1 className="text-3xl text-white font-semibold">Dashboard</h1>
                    <p className="text-gray-200 mt-3">
                        Discover amazing gadgets designed to boost your experience. From innovative devices to <br className="hidden md:block" />essential accessories, we’ve got everything covered!
                    </p>

                    <div className="flex gap-5 mt-10">
                        <button
                            className={`btn rounded-full px-10 ${activeComponent === "cart" ? "bg-white text-primary" : "bg-purple-500 text-white"}`}
                            onClick={() => setActiveComponent("cart")}
                        >
                            Cart
                        </button>
                        <button
                            className={`btn rounded-full px-10 ${activeComponent === "wishlist" ? "bg-white text-primary" : "bg-purple-500 text-white"}`}
                            onClick={() => setActiveComponent("wishlist")}
                        >
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>

            <div>
                {activeComponent === "cart" && <Cart />}
                {activeComponent === "wishlist" && <Wishlist />}
            </div>
        </div>
    );
};

export default Dashboard;
