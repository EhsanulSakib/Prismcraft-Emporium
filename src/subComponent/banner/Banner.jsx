import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (
        <div className='mb-4 md:mb-8 lg:mb-12'>
            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
            >
                <SwiperSlide>
                    <div style={{ backgroundImage: `url("https://phglass-studio.com/wp-content/uploads/2023/10/Modern-Glassblowing-1024x574.jpeg")` }} className='flex items-center justify-center z-1 w-full h-60 md:h-96 lg:h-[500px] bg-cover bg-center relative'>
                        <div className='absolute w-full h-full bg-black opacity-50'>
                        </div>
                        <h2 className='text-white drop-shadow-lg font-extrabold text-xl md:text-2xl lg:text-4xl inline-block w-4/5 md:2/3 text-center'>Welcome to your happy place. Discover Unique Paper Crafts & Glass Art Creations</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div style={{ backgroundImage: `url("https://i.pinimg.com/736x/bc/da/60/bcda609a6b0550bb15245b4a2c090972.jpg")` }} className='flex items-center justify-center z-1 w-full h-60 md:h-96 lg:h-[500px] bg-cover bg-center relative'>
                        <div className='absolute w-full h-full bg-black opacity-50'>
                        </div>
                        <h2 className='text-white drop-shadow-lg font-extrabold text-xl md:text-2xl lg:text-4xl inline-block w-4/5 md:2/3 text-center'>Unveil the Magic of Paper Crafts & Glass Artistry through us!</h2>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div style={{ backgroundImage: `url("https://img.freepik.com/free-photo/stained-glass-window-church-st-louis_188544-43224.jpg?t=st=1714282264~exp=1714285864~hmac=441d2ffe23e7e20ea7b4c03c665fcf34e29d833a2b780b8f215f3d505843ea37&w=996")` }} className='flex items-center justify-center z-1 w-full h-60 md:h-96 lg:h-[500px] bg-cover bg-center relative'>
                        <div className='absolute w-full h-full bg-black opacity-50'>
                        </div>
                        <h2 className='text-white drop-shadow-lg font-extrabold text-xl md:text-2xl lg:text-4xl inline-block w-4/5 md:2/3 text-center'>A Best Place where you can Buy and Sell your Creative Products</h2>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div style={{ backgroundImage: `url("https://d16kd6gzalkogb.cloudfront.net/magazine_images/Featured-3D-Crystal-Glass-Art-Image-via-Pinterest.com_.jpg")` }} className='flex items-center justify-center z-1 w-full h-60 md:h-96 lg:h-[500px] bg-cover bg-center relative'>
                        <div className='absolute w-full h-full bg-black opacity-50'>
                        </div>
                        <h2 className='text-white drop-shadow-lg font-extrabold text-xl md:text-2xl lg:text-4xl inline-block w-4/5 md:2/3 text-center'>Shop Exquisite Paper Crafts & Glass Art Designs</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div style={{ backgroundImage: `url("https://m.media-amazon.com/images/I/51h-Ntv7PjL._AC_SY450_.jpg")` }} className='flex items-center justify-center z-1 w-full h-60 md:h-96 lg:h-[500px] bg-cover bg-center relative'>
                        <div className='absolute w-full h-full bg-black opacity-50'>
                        </div>
                        <h2 className='text-white drop-shadow-lg font-extrabold text-xl md:text-2xl lg:text-4xl inline-block w-4/5 md:2/3 text-center'>Find Your Inspiration in Paper Crafts & Glass Artistry</h2>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>

    );
};

export default Banner;