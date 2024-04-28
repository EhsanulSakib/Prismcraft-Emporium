import Lottie from "lottie-react";
import error from "../../../public/error.json";

const ErrorPage = () => {

    return (
        <div className="min-h-screen bg-white">
            <Lottie animationData={error} className="h-[32rem]" />
        </div>
    );
};

export default ErrorPage;