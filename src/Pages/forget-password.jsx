import Banner from "../Components/Banner"
import PrimaryButton from "../Components/pri-button";
import SecondaryButton from "../Components/sec-button";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    return (
        <div className="h-screen flex overflow-hidden">
            <Banner />
            <div className="w-[65%] px-8 py-8">
        <div className="flex justify-end gap-4 items-center">
          <span className="text-text1-0 font-Rubik text-[1rem]">
            Don&apos;t have an account?
          </span>
          <Link to="/create-account" relative="path">
          <SecondaryButton
            id={"Get Started"}
            value={"Get Started"}
          ></SecondaryButton>
          </Link>
        </div>
        <div className="flex justify-center items-center h-full">
          <div className="w-[80%] p-8">
            <div className="mb-8">
              <h1 className="text-[2rem] font-Rubik text-text2-0 font-bold">
                FORGOT PASSWORD?
              </h1>
              <p className="font-Rubik text-[1rem] text-text1-0">
              Don’t worry! Enter your registered email address to get password reset instructions.
              </p>
            </div>

            <form action="" className="space-y-4">
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-sm font-medium pb-2 text-text2-0"
                >
                  Email address
                </label>
                <input
                  className="border border-tertiary-0 px-2 py-2 rounded focus:border-secondary-0 focus:outline-none"
                  placeholder="sample@gmail.com"
                  type="text"
                />
              </div>

              <div className="pt-6">
                <PrimaryButton id="send" value="Send"></PrimaryButton>
              </div>
            </form>
            <div className="mt-8">
                <p className="text-text1-0 font-Rubik mb-2">Remember your password?</p>
                <Link to="/" relative="path" className="flex gap-2 items-center">
                    
                    <svg className="w-4" fill="#6A74A5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg>
                    
                    <p className="text-text1-0 font-Rubik ">Sign In</p>
                </Link>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default ForgotPassword