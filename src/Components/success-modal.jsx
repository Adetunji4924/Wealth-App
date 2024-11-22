import avatar from "../assets/Group 4.png";
import PrimaryButton from "./pri-button";
import { Link } from "react-router-dom";

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[40%] py-16 rounded-lg shadow-lg text-center flex flex-col justify-center items-center">
        <img src={avatar} alt="Avatar" className="mb-4" />
        <h2 className="text-[1.2rem] font-bold text-text2-0 mb-1 font-Rubik">
          Your account has been created!
        </h2>
        <p className="text-text1-0 font-Rubik mb-6">
          Are you ready to manage your own wealth?
        </p>
        <Link to="/dashboard" relative="dashboard">
        <PrimaryButton
          onClick={onClose}
          id="continue"
          value="Continue"
        ></PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default SuccessModal;
