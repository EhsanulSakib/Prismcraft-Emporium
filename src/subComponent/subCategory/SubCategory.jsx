
const SubCategory = ({ subCategory_info }) => {
    const { Category, image, subCategory } = subCategory_info
    return (
        <div className="card shadow-xl image-full">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title font-extrabold text-xl">{Category}</h2>
                <p></p>
                <div className="card-actions justify-end">
                    <button className="btn">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SubCategory;