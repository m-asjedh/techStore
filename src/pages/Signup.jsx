import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import Lottie from "react-lottie";
import animationData from "../assets/animations/signupAnimation.json";
import Button from "../components/Button";
import { FcOk } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useFormik } from "formik";
import { signupValidationSchema } from "../schema/index.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: signupValidationSchema,
    onSubmit: (values) => {
      const { name, email, password } = values;
      try {
        register(name, email, password);
        navigate("/signin");
        toast.success("Successfully registered");
      } catch (error) {
        console.error("Error during registration:", error);
        toast.warn("Please try again");
      }
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div>
        <div className="bg-white lg:mx-20 rounded-lg shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-8 border border-black">
          <div className="flex flex-col justify-center items-center space-y-6 p-4">
            <h2 className="text-3xl font-general text-center">Sign Up</h2>
            <form onSubmit={formik.handleSubmit} className="space-y-4 w-full">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className={`p-3 border ${
                    formik.touched.name && formik.errors.name
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 ${
                    formik.touched.name && formik.errors.name
                      ? "focus:ring-red-500"
                      : "focus:ring-blue-500"
                  } w-full`}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-sm">{formik.errors.name}</p>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className={`p-3 border ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 ${
                    formik.touched.email && formik.errors.email
                      ? "focus:ring-red-500"
                      : "focus:ring-blue-500"
                  } w-full`}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm">{formik.errors.email}</p>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={`p-3 border ${
                    formik.touched.password && formik.errors.password
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 ${
                    formik.touched.password && formik.errors.password
                      ? "focus:ring-red-500"
                      : "focus:ring-blue-500"
                  } w-full`}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.password}
                  </p>
                )}
              </div>
              <div className="flex justify-center items-center mt-5">
                <Button
                  title="Sign Up"
                  containerClass="bg-blue-600 hover:bg-blue-400 text-sm"
                  rightIcon={<FcOk />}
                  type="submit"
                />
              </div>
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
                <p></p>
                <Link to="/signin" className="text-blue-600 hover:underline">
                  Login
                </Link>
              </p>
            </form>
          </div>

          <div className="flex justify-center items-center bg-black">
            <Lottie options={lottieOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
