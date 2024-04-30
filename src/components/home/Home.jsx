import { useLoaderData } from "react-router-dom";
import Banner from "../../subComponent/banner/Banner";
import { useContext, useState } from "react";
import SubCategory from "../../subComponent/subCategory/SubCategory";
import { AuthContext } from "../../provider/AuthProvider";
import Craft from "../../subComponent/craft/Craft";
import FAQ from "../../subComponent/faq/FAQ";
import About from "../../subComponent/about/About";

const Home = () => {
    const loadedSubCategories = useLoaderData()
    const [subCategories, setSubCategories] = useState(loadedSubCategories)
    const { crafts } = useContext(AuthContext)
    let showCrafts = crafts
    if (crafts.length >= 6) {
        showCrafts = crafts.slice(0, 6)
    }


    return (
        <div>
            <Banner></Banner>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold my-4 lg:my-8">Art & Craft Categories</h2>
            <div className="lg:w-11/12 m-auto my-4 lg:my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                {
                    subCategories?.map(subCategory => <SubCategory key={subCategory._id} subCategory_info={subCategory}></SubCategory>)
                }
            </div>


            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold my-4 lg:my-8">Crafts</h2>
            <div className="lg:w-11/12 m-auto my-4 lg:my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                {
                    showCrafts?.map(card => <Craft key={card._id} craft={card}></Craft>)
                }
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold my-4 lg:my-8">About Our Team</h2>
            <div className="w-11/12 m-auto">
                <About></About>
            </div>


            <FAQ></FAQ>
        </div>
    );
};

export default Home;