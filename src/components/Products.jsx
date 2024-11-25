import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Products = ({ product }) => {

    const { product_id, product_title, product_image, price } = product || {};

    return (
        <div className="card bg-base-100 border shadow-xl">
            <figure className="p-1 ">
                <img
                    src={product_image}
                    alt={product_title}
                    className="rounded-xl" />
            </figure>
            <hr />
            <div className="card-body ">
                <h2 className="card-title ">{product_title}</h2>
                <p>Price: $ {price}</p>
                <div className="card-actions">
                    <Link to={`/products/${product_id}`}>
                        <button className="btn text-primary rounded-full border border-primary  ">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Products;