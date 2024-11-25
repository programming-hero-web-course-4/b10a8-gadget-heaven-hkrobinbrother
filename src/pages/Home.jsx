import { useLoaderData, useParams } from "react-router-dom";
import Banner from "../components/Banner";
import Category from "../components/category";


const Home = () => {
    const { category } = useParams()

    const categories = useLoaderData();

    return (
        <div>
            {/* Banner */}
            <Banner></Banner>

            {/* categories */}
            <div className="w-11/12 mx-auto px-12">
                <Category category={category} categories={categories}></Category>
            </div>
            {/* Dynamic Nested Component */}
        </div>
    );
};

export default Home;