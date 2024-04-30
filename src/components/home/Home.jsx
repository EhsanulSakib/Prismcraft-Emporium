import { useLoaderData } from "react-router-dom";
import Banner from "../../subComponent/banner/Banner";
import { useState } from "react";
import SubCategory from "../../subComponent/subCategory/SubCategory";

const Home = () => {
    const loadedSubCategories = useLoaderData()
    const [subCategories, setSubCategories] = useState(loadedSubCategories)

    return (
        <div>
            <Banner></Banner>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold my-4 lg:my-8">Art & Craft Categories</h2>
            <div className="my-4 lg:my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                {
                    subCategories?.map(subCategory => <SubCategory key={subCategory._id} subCategory_info={subCategory}></SubCategory>)
                }
            </div>
        </div>
    );
};

export default Home;