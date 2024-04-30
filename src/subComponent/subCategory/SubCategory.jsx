import { Typewriter } from 'react-simple-typewriter'
const SubCategory = ({ subCategory_info }) => {
    const { Category, image, subCategory } = subCategory_info
    return (
        <div className="card h-64 md:h-auto shadow-xl image-full">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title font-extrabold text-xl text-white">{Category}</h2>
                <h2 className='text-white'>Product Type:</h2>
                <h1 className='pt-0' style={{ margin: 'auto 0', fontWeight: 'normal' }}>
                    {' '}
                    <span style={{ color: 'white', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={subCategory}
                            loop={false}
                            cursor
                            cursorStyle='_'
                            typeSpeed={30}
                            deleteSpeed={20}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    );
};

export default SubCategory;