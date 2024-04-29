import { FaRegEye, FaPencilAlt } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BASE_URL } from "../../constVariable/constVariable";

const Craft = ({ craft, crafts, setCrafts }) => {
    const { _id, itemName, subCategory, price, rating, customization, stockStatus, processingTime, userEmail, userName, photo, description } = craft
    const navigate = useNavigate()

    const handleDetails = id => {
        navigate(`/all-craft/${id}`)
    }

    return (
        <div className="card rounded-none border border-gray-400 shadow-xl">
            <figure><img src={photo} alt="craft" className="w-full h-44 object-cover object-center" /></figure>
            <div className="card-body p-2">
                <h2 className="card-title font-bold text-xl mb-2">{itemName}</h2>
                <h2 className="font-semibold"><span className="bg-purple-300 p-1 rounded-lg">#{subCategory}</span></h2>
                {
                    parseFloat(rating) == 4.5 ?
                        <h2 className="flex gap-1 font-semibold text-xl text-yellow-500"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></h2>
                        :
                        <h2 className="flex gap-1 font-semibold text-xl text-yellow-500"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></h2>
                }
                <h2 className="flex gap-2 font-semibold text-5xl my-4">${price}</h2>

                <button className="btn btn-sm btn-info text-white font-bold" onClick={() => handleDetails(_id)}>View Details</button>
            </div>
        </div >
    );
};

export default Craft;