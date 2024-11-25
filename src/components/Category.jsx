import { NavLink } from "react-router-dom";
import Products from "./Products";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Category = ({ categories }) => {
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]); // Store all products

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setAllProducts(data); // Store all products for future filtering
                setProducts(data.slice(0, 6)); // Initially show only the first 6 products
            });
    }, []);

    const handleCategory = (selectedCategory) => {
        if (selectedCategory === "All Product") {
            setProducts(allProducts); // Show all products if "All Product" is selected
        } else {
            const filteredByCategory = allProducts.filter(
                product => product.category === selectedCategory
            );
            setProducts(filteredByCategory); // Show only the first 6 filtered products
        }
    };

    return (
        <div className="mb-10">
            <h1 className="md:text-3xl lg:text-4xl text-xl font-bold text-center mb-10">Explore Cutting-Edge Gadgets</h1>

            <section className="grid grid-cols-1 lg:grid-cols-5 space-y-5 lg:space-y-0 lg:space-x-5 my-10">
                {/* Single category section */}
                <div className="h-full text-center content-start">
                    <div className="grid grid-cols-1 rounded-md overflow-hidden shadow-lg bg-white p-3 border">

                        {
                            // eslint-disable-next-line react/prop-types
                            categories.map(category => (

                                <NavLink
                                    key={category.category}
                                    to={`/${category.category}`}
                                    className={({ isActive }) =>
                                        `btn mt-5 rounded-full text-[17px] ${isActive ? 'bg-primary text-white hover:bg-purple-800' : ''}`
                                    }
                                    onClick={() => handleCategory(category.category)}>
                                    {category.category}
                                </NavLink>
                            ))
                        }
                    </div>
                </div>

                {/* Product section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:col-span-4 gap-5">
                    {
                        products.length > 0 ? (
                            products.map(product => <Products product={product} key={product.product_id}></Products>)
                        ) : (
                            <div className="text-center  col-span-full   rounded-3xl h-40 flex justify-center items-center mt-10 md:mt-32">

                                <div><img src="https://stores.lifestylestores.com/VendorpageTheme/Enterprise/EThemeForLifestyleUpdated/images/product-not-found.jpg" alt="" /></div>


                            </div>
                        )
                    }
                </div>
            </section>
        </div>
    );
};

export default Category;
