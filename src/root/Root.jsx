import { useContext } from "react";
import Navbar from "../subComponent/navbar/Navbar";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer } from 'react-toastify';
import { Outlet } from "react-router-dom";
import Footer from "../subComponent/footer/Footer";

const Root = () => {
    const { darkMode } = useContext(AuthContext)
    return (
        <div className={`${darkMode ? 'bg-gray-800 text-slate-100' : 'bg-slate-100 text-gray-800'} font-raleway`}>
            <div className={`px-1 max-w-[3080px] m-auto min-h-screen`} >
                <Navbar></Navbar>
                <Outlet></Outlet>
                <ToastContainer></ToastContainer>
                <Footer></Footer>
            </div >
        </div>

    );
};

export default Root;