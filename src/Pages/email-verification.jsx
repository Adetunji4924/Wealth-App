import PrimaryButton from "../Components/pri-button";
import { Link } from "react-router-dom";
import Banner from "../Components/Banner";

const EmailVerificationPage = () => {
    return (
        <div className="h-screen flex overflow-hidden">
        <Banner />
        <div className="w-[65%] px-8 py-8">
          <div className="flex justify-center items-center h-full">
            <div className="w-[80%] p-8">
              <div className="mb-8">
                <p className="font-Rubik text-[1rem] text-text1-0">
                  Your email have been successfully verified.
                </p>
                <PrimaryButton />
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
        />
      </div>  
    )
}

export default EmailVerificationPage