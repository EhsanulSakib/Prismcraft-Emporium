import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Craft from "../../subComponent/craft/Craft";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet";
AOS.init();
const AllCrafts = () => {
    const { crafts } = useContext(AuthContext)
    return (
        <div className="my-4 lg:my-8 min-h-[70rem] w-11/12 m-auto">
            <Helmet>
                <title>PrismCraft Emporium | All Crafts</title>
            </Helmet>
            <h2 className="text-center text-2xl lg:text-3xl font-bold">All Art & Crafts</h2>
            <div data-aos="fade-up"
                data-aos-duration="1000" className="mt-4 lg:mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-2 lg:gap-4">
                {
                    crafts?.map(craft => <Craft key={craft._id} craft={craft}></Craft>)
                }
            </div>
        </div>
    );
};

export default AllCrafts;