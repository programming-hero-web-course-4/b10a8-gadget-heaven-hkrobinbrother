
// eslint-disable-next-line react/prop-types
const SingleCart = ({ product, handleRemoveProduct }) => {
    // eslint-disable-next-line react/prop-types
    const { product_title, product_image, price, description } = product;

    return (
        <div className="md:w-4/5 mx-auto px-5">
            <div className="border flex items-center justify-between rounded-lg bg-slate-50 p-4 shadow-md">
                <div className="flex items-center gap-5">
                    <div>
                        <img className="w-20 h-20 rounded-2xl" src={product_image} alt={`Product Image`} />
                    </div>
                    <div>
                        <h1 className="text-xl font-medium">{product_title}</h1>
                        <p className="text-sm mt-3 text-[#717171]">{description}</p>
                        <p className="pt-3">Price: ${price}</p>
                    </div>
                </div>
                <div>
                    <i
                        className="fa-regular fa-trash-can text-red-600 text-2xl cursor-pointer"
                        onClick={() => handleRemoveProduct(product)}
                    ></i>
                </div>
            </div>
        </div>
    );
};

export default SingleCart;
