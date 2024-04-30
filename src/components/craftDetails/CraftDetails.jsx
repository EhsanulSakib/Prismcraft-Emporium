import { useLoaderData } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Swal from "sweetalert2";
const CraftDetails = () => {
    const craft = useLoaderData()

    const { itemName, subCategory, price, rating, customization, stockStatus, processingTime, userEmail, userName, photo, description } = craft

    const handleDetails = () => {
        Swal.fire({
            title: 'Contact',
            text: `For order this product send mail at ${userEmail}`,
            icon: 'info',
            confirmButtonText: 'Ok'
        })
    }

    return (
        <div className="min-h-[75vh] w-11/12 my-4 m-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold">Craft Details</h2>

            <div className=" my-4 lg:my-8 flex flex-col gap-4 md:flex-row md:items-center justify-center shadow-2xl p-4 border border-gray-300 rounded-xl">
                <div>
                    <img src={photo} alt="" className="h-64 w-full md:w-96 md:h-96 object-cover object-center" />
                </div>

                <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="w-full" >
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{itemName}</h1>
                        <p className="py-2 text-base md:text-lg "><span>#{subCategory}</span></p>
                        {
                            parseFloat(rating) == 4.5 ?
                                <h2 className="flex gap-1 font-semibold text-xl text-yellow-500"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></h2>
                                :
                                <h2 className="flex gap-1 font-semibold text-xl text-yellow-500"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></h2>
                        }

                        <p className="my-4 text-sm md:text-base">{description}</p>
                        <p className="py-2 text-base md:text-lg "><span className="font-semibold">Processing Time:</span> {processingTime} Day</p>

                        <p className="py-2 text-base"><span className="font-semibold">Creator:</span> {userName} Day</p>


                        <div>
                            <h2 className="flex gap-4"><span className="font-semibold bg-purple-600 rounded-md p-1 text-white">{customization === "Yes" ? "Customizable" : "Not Customizable"}</span> <span className="font-semibold bg-purple-600 rounded-md p-1 text-white">{stockStatus}</span></h2>
                        </div>
                    </div>

                    <div className="w-full flex self-end flex-col lg:items-end">
                        <p className="mt-8 pb-4 font-bold text-6xl">${price}</p>
                        <button onClick={handleDetails} className="btn border-none text-white bg-blue-400 hover:bg-blue-500 text-lg w-full md:w-44">Purchase</button>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default CraftDetails;