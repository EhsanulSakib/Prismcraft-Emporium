import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Craft from "../../subComponent/craft/Craft";

const AllCrafts = () => {
    const { crafts, setCrafts } = useContext(AuthContext)
    console.log(crafts)
    return (
        <div className="my-4 lg:my-8 min-h-[70rem] w-11/12 m-auto">
            <h2 className="text-center text-2xl lg:text-3xl font-bold">All Art & Crafts</h2>
            <div className="mt-4 lg:mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-col-8 gap-2 lg:gap-4">
                {
                    crafts?.map(craft => <Craft key={craft._id} craft={craft} crafts={crafts} setCrafts={setCrafts}></Craft>)
                }
            </div>
        </div>
    );
};

export default AllCrafts;