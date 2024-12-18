import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import Lottie from "react-lottie";
import animationData from "../assets/animations/signinAnimation.json";
import Button from "../components/Button";
import { FcOk } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useFormik } from "formik";
import { signinValidationSchema } from "../schema/index.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signinValidationSchema,
    onSubmit: (values) => {
      const { email, password } = values;
      const success = login(email, password);
      if (success) {
        toast.success("Successfully logged in");
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      } else {
        console.log("Invalid email or password");
        toast.warn("Invalid Credentials");
      }
    },
  });

  return (
    <>
      <ToastContainer />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white lg:mx-20 rounded-lg shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-8 border border-black">
          <div className="flex flex-col justify-center items-center space-y-6 p-4">
            <h2 className="text-3xl font-general text-center">Sign In</h2>
            <form onSubmit={formik.handleSubmit} className="space-y-4 w-full">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.email}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="p-3  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.password}
                  </p>
                )}
              </div>
              <div className="flex justify-center items-center mt-5">
                <Button
                  type="submit"
                  title="Sign In"
                  containerClass="bg-blue-600 hover:bg-blue-400 text-sm"
                  rightIcon={<FcOk />}
                />
              </div>
            </form>
            <p className="text-center text-gray-500 my-4">
              Or Sign in with social platforms
            </p>
            <div className="flex justify-center space-x-6">
              <FaGoogle className="text-3xl cursor-pointer hover:text-blue-500" />
              <FaFacebook className="text-3xl cursor-pointer hover:text-blue-700" />
              <FaApple className="text-3xl cursor-pointer hover:text-gray-700" />
            </div>
            <p className="text-center text-gray-600 mt-4">
              Don&apos;t have an account?
              <p></p>
              <Link to="/signup" className="text-blue-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>

          <div className="flex justify-center items-center bg-black">
            <Lottie options={lottieOptions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
