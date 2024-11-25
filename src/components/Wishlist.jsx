import { useContext } from "react";
import { CountContext } from "../layouts/MainLayout";
import Swishlist from "./Swishlist";

const Wishlist = () => {
    const { wishlist, setWishlist } = useContext(CountContext);



    // Handle whislist removal
    const RemoveWishlist = (productToRemove) => {
        const updatedProducts = wishlist.filter(product => product.product_id !== productToRemove.product_id);
        setWishlist(updatedProducts);
    };

    return (
        <div className="mt-10">
            <div className="flex justify-center">
                <h1 className="text-xl font-bold">Wishlist</h1>
            </div>
            <div className="flex flex-col gap-5 my-10">
                {wishlist.map(product => (
                    <Swishlist
                        product={product}
                        setWishlist={setWishlist}
                        wishlist={wishlist}
                        key={product.product_id}
                        RemoveWishlist={RemoveWishlist}
                    />
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
