import Swal from 'sweetalert2'
import { BASE_URL } from '../../constVariable/constVariable';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const AddCrafts = () => {
    const { darkMode, user } = useContext(AuthContext)
    const handleAddCrafts = event => {
        event.preventDefault();

        const form = event.target

        const itemName = form.itemName.value
        const subCategory = form.subCategory.value
        const price = form.price.value
        const rating = form.rating.value
        const customization = form.customization.value
        const stockStatus = form.stockStatus.value
        const processingTime = form.processingTime.value
        const userEmail = form.userEmail.value
        const userName = form.userName.value
        const photo = form.photo.value
        const description = form.description.value

        const newCraft = { itemName, subCategory, price, rating, customization, stockStatus, processingTime, userEmail, userName, photo, description }
        console.log(newCraft)
        fetch(`${BASE_URL}crafts`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item Posted Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }

    return (
        <div className="w-11/12 md:w-5/6 m-auto my-4 md:my-8 lg:my-12 min-h-[70vh] shadow-xl p-4 md:p-8">
            <h2 className="font-extrabold text-center text-2xl md:text-3xl mb-4">Add a Craft Item</h2>

            <form onSubmit={handleAddCrafts} className="w-11/12 m-auto md:grid grid-cols-2 gap-4 my-4 md:my-8 lg:my-12 rounded-lg">
                <div>
                    <h2 className="mb-2 font-bold text-lg">Item Name:</h2>
                    <input required type="text" placeholder="Enter item name" className={`input rounded-none input-bordered w-full bg-inherit`} name="itemName" />
                </div>
                <div>
                    <h2 className="mb-2 font-bold text-lg">Sub-Category Name:</h2>
                    <select required className={`input rounded-none input-bordered ${darkMode ? ' bg-gray-800' : ' bg-slate-100'} w-full cursor-pointer`} name="subCategory">
                        <option value="">Select a subcategory </option>
                        <option value="Card Making"> Card Making</option>
                        <option value="Scrapbooking">Scrapbooking</option>
                        <option value="Paper Quilling & origami">Paper Quilling & origami</option>
                        <option value="Glass Painting">Glass Painting</option>
                        <option value="Lampworking">Lampworking</option>
                        <option value="Glass Dying & Staining">Glass Dying & Staining</option>
                    </select>
                </div>

                <div>
                    <h2 className="mb-2 font-bold text-lg">Price:</h2>
                    <input type="text" required placeholder="Enter Price" className="input rounded-none input-bordered w-full bg-inherit" name="price" />
                </div>
                <div>
                    <h2 className="mb-2 font-bold text-lg">Rating:</h2>
                    <input required type="text" placeholder="Enter Rating" className="input rounded-none input-bordered w-full bg-inherit" name="rating" />
                </div>
                <div>
                    <h2 className="mb-2 font-bold text-lg">Customization:</h2>
                    <label className="inline-flex items-center">
                        <input required type="radio" className="form-radio text-primary" name="customization" value="Yes" />
                        <span className="ml-2 text-lg">Yes</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                        <input required type="radio" className="form-radio text-primary" name="customization" value="No" />
                        <span className="ml-2 text-lg">No</span>
                    </label>
                </div>

                <div>
                    <h2 className="mb-2 font-bold text-lg">Stock Status:</h2>
                    <label className="inline-flex items-center">
                        <input required type="radio" className="form-radio text-primary" name="stockStatus" value="In Stoke" />
                        <span className="ml-2 text-lg">In Stoke</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                        <input required type="radio" className="form-radio text-primary" name="stockStatus" value="Made to Order" />
                        <span className="ml-2 text-lg">Made to Order</span>
                    </label>
                </div>


                <div>
                    <h2 className="mb-2 font-bold text-lg">Processing Time:</h2>
                    <input required type="text" placeholder="Enter Processing Time" className="input rounded-none input-bordered w-full bg-inherit" name="processingTime" />
                </div>

                <div>
                    <h2 className="mb-2 font-bold text-lg">User Email:</h2>
                    <input required type="text" placeholder="Enter Processing Time" className="input rounded-none input-bordered w-full bg-inherit" name="userEmail" defaultValue={user.email} />
                </div>




                <div>
                    <h2 className="mb-2 font-bold text-lg">User Name:</h2>
                    <input required type="text" placeholder="Enter Processing Time" className="input rounded-none input-bordered w-full bg-inherit" name="userName" value={user.displayName} />
                </div>
                <div className="col-span-2">
                    <h2 className="mb-2 font-bold text-lg">Photo URL:</h2>
                    <input required type="text" placeholder="Enter photo URL" className="mb-4 input rounded-none input-bordered w-full bg-inherit" name="photo" />
                </div>
                <div className='col-span-2 mb-4'>
                    <h2 className="mb-2 font-bold text-lg">Short Description:</h2>
                    <input type="text" placeholder="Enter Short Description about the Product" className="input rounded-none input-bordered w-full bg-inherit h-24" name="description" />
                </div>
                <input type="submit" value="Add" className="btn text-lg btn-info font-bold text-white col-span-2 py-2 w-full" />
            </form>
        </div>
    );
};

export default AddCrafts;