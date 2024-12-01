import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import Lottie from "react-lottie";
import animationData from "../assets/animations/signupAnimation.json";
import Button from "../components/Button";
import { FcOk } from "react-icons/fc";

const Signup = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white lg:mx-20  rounded-lg shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        <div className="flex flex-col justify-center items-center space-y-6">
          <h2 className="text-3xl font-general text-center">Sign Up</h2>
          <div className="space-y-4 w-full">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Name"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Email"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="password"
                placeholder="Password"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>
          </div>
          <Button
            title="Sign Up"
            containerClass="bg-blue-400 hover:bg-blue-600 text-sm"
            rightIcon={<FcOk />}
          />
          <p className="text-center text-gray-500 my-4">
            Or Sign up with social platforms
          </p>
          <div className="flex justify-center space-x-6">
            <FaGoogle className="text-3xl cursor-pointer hover:text-blue-500" />
            <FaFacebook className="text-3xl cursor-pointer hover:text-blue-700" />
            <FaApple className="text-3xl cursor-pointer hover:text-gray-700" />
          </div>
          <p className="text-center text-gray-600 mt-4">
            Already have an account?
            <a href="/login" className="text-blue-600 hover:underline">
              Login
            </a>
          </p>
        </div>

        <div className="flex justify-center items-center w-full">
          <Lottie options={lottieOptions} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
