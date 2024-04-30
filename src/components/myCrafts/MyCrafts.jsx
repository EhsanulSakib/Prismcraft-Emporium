import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Post from "../../subComponent/post/Post";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet";
AOS.init();

const MyCrafts = () => {
    const { user, crafts } = useContext(AuthContext)

    const posts = crafts.filter(craft => (craft.userName === user.displayName) && (craft.userEmail === user.email))

    return (
        <div className="min-h-[80vh]">
            <Helmet>
                <title>EchoHaven Realty | Profile</title>
            </Helmet>
            <h2 className=" mt-4 lg:mt-8 text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4">User Profile</h2>
            <div className="hero items-center md:justify-between w-11/12 m-auto border border-gray-300 rounded-lg shadow-xl">
                <div className="hero-content flex-col md:flex-row">
                    <img src={user.photoURL} className="w-44 h-44 object-cover object-top rounded-full shadow-2xl" />
                    <div>
                        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center md:text-left">{user.displayName}</h1>
                        {user.email && <p className="py-6 text-lg">{user.email}</p>}
                    </div>
                </div>
            </div>
            <h1 className="mt-4 lg:mt-8 text-2xl md:text-3xl lg:text-4xl text-center font-bold">My Art & Crafts</h1>
            <div data-aos="fade-up"
                data-aos-duration="1000">
                {
                    posts?.map(post => <Post key={post._id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default MyCrafts;