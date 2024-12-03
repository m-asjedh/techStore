import { MdDelete, MdEdit } from "react-icons/md";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AccountDetails = () => {
  const navigate = useNavigate();

  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8 overflow-x-hidden cursor-pointer">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-4 gap-8">
        <div className="bg-white shadow rounded-lg p-5">
          <h2 className="text-lg font-bold mb-5 text-gray-800">Menu</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 text-blue-500 font-medium">
              <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="text-blue-500">👤</i>
              </span>
              <span>Profile</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-700">
              <span className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center">
                <i className="text-gray-600">📦</i>
              </span>
              <span>Past Orders</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-700">
              <span className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center">
                <i className="text-gray-600">⚙️</i>
              </span>
              <span>Settings</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-700">
              <span className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center">
                <i className="text-gray-600">🎨</i>
              </span>
              <span>Theme Settings</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-700">
              <span className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center">
                <i className="text-gray-600">🔒</i>
              </span>
              <span>Privacy Settings</span>
            </li>
            <li
              onClick={handleLogout}
              className="flex items-center space-x-3 text-red-500 font-medium"
            >
              <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                <i className="text-red-500">🚪</i>
              </span>
              <span>Sign Out</span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3 bg-white shadow rounded-lg p-2 lg:p-5 ">
          <h2 className="text-lg font-bold mb-5 text-gray-800">
            Account Details
          </h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                Avatar
              </div>
              <Button
                title="Change Avatar"
                containerClass="bg-green-400 hover:bg-green-600 text-sm"
                rightIcon={<MdEdit />}
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-700 text-sm">Account Name</p>
                <p className="text-gray-800 font-medium">Mohamed Asjedh</p>
              </div>
              <Button
                title=""
                containerClass="bg-green-400 hover:bg-green-600 text-sm"
                rightIcon={<MdEdit />}
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-700 text-sm">Account Email</p>
                <p className="text-gray-800 font-medium">
                  masjedh.dev@gmail.com
                </p>
              </div>
              <Button
                title=""
                containerClass="bg-green-400 hover:bg-green-600 text-sm"
                rightIcon={<MdEdit />}
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-700 text-sm">Account Password</p>
                <p className="text-gray-800 font-medium">********</p>
              </div>
              <Button
                title=""
                containerClass="bg-green-400 hover:bg-green-600 text-sm"
                rightIcon={<MdEdit />}
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-700 text-sm">Delivery Address</p>
                <p className="text-gray-800 font-medium">
                  9/3 Kandy Road, Kengalla
                </p>
              </div>
              <Button
                title=""
                containerClass="bg-green-400 hover:bg-green-600 text-sm"
                rightIcon={<MdEdit />}
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-700 text-sm">Phone Number</p>
                <p className="text-gray-800 font-medium">(+94) 74 114 6366</p>
              </div>
              <Button
                title=""
                containerClass="bg-green-400 hover:bg-green-600 text-sm"
                rightIcon={<MdEdit />}
              />
            </div>
            <div className="text-center">
              <Button
                title="Delete Account"
                containerClass="bg-red-400 hover:bg-red-600 text-sm"
                leftIcon={<MdDelete />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
