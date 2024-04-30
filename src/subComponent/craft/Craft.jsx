import { useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Craft = ({ craft }) => {
    const { _id, itemName, subCategory, price, rating, photo } = craft
    const navigate = useNavigate()

    const handleDetails = id => {
        navigate(`/all-craft/${id}`)
    }

    return (
        <div className="card rounded-none border border-gray-700 shadow-xl">
            <figure><img src={photo} alt="craft" className="w-full h-44 object-cover object-center" /></figure>
            <div className="card-body p-2">
                <h2 className="card-title font-bold text-xl mb-2">{itemName}</h2>
                <h2 className="font-semibold"><span className="bg-purple-400 p-1 rounded-lg">#{subCategory}</span></h2>
                {
                    parseFloat(rating) == 4.5 ?
                        <h2 className="flex gap-1 font-semibold text-xl text-yellow-500"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></h2>
                        :
                        <h2 className="flex gap-1 font-semibold text-xl text-yellow-500"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></h2>
                }
                <h2 className="font-semibold text-5xl my-2">${price}</h2>


                <button className="btn btn-sm btn-info bg-purple-500 border-none hover:bg-purple-600 text-white font-bold" onClick={() => handleDetails(_id)}>View Details</button>
            </div>
        </div >
    );
};

export default Craft;