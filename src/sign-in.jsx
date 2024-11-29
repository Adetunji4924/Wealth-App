import { useState } from "react";
import Banner from "./Components/Banner";
import PrimaryButton from "./Components/pri-button";
import SecondaryButton from "./Components/sec-button";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config/firebase";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const logIn = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert("Email and password are required.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert("Login successfully!");
      console.log("User created:", userCredential.user); // Check if the user is created
    } catch (error) {
      console.log("Error code:", error.code);
      if (error.code === "auth/user-not-found") {
        alert("User does not exist"); // User does not exist
      } else if (error.code === "auth/wrong-password") {
        alert(
          "An account with this email exists, but the password is incorrect."
        );
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  };

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
                WELCOME TO WEALTH!
              </h1>
              <p className="font-Rubik text-[1rem] text-text1-0">
                Sign in and start managing your wealth account.
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
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col relative">
                <label
                  htmlFor="password"
                  className="text-sm font-medium pb-2 text-text2-0"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  placeholder="******************"
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-tertiary-0 px-2 py-2 rounded focus:border-secondary-0 focus:outline-none"
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 pt-8 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.24967 3.53325C8.82328 3.39898 9.41056 3.33187 9.99967 3.33325C15.833 3.33325 19.1663 9.99992 19.1663 9.99992C18.6605 10.9463 18.0572 11.8372 17.3663 12.6582M11.7663 11.7666C11.5375 12.0122 11.2615 12.2092 10.9548 12.3459C10.6481 12.4825 10.3171 12.556 9.98142 12.5619C9.64574 12.5678 9.31231 12.5061 9.00102 12.3803C8.68972 12.2546 8.40694 12.0674 8.16955 11.83C7.93215 11.5926 7.745 11.3099 7.61926 10.9986C7.49353 10.6873 7.43178 10.3539 7.4377 10.0182C7.44362 9.6825 7.5171 9.35146 7.65374 9.04479C7.79038 8.73813 7.98738 8.46212 8.23301 8.23325M0.833008 0.833252L19.1663 19.1666M14.9497 14.9499C13.5252 16.0358 11.7906 16.6373 9.99967 16.6666C4.16634 16.6666 0.833008 9.99992 0.833008 9.99992C1.86958 8.06816 3.30729 6.38042 5.04967 5.04992L14.9497 14.9499Z"
                        stroke="#858EBD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      fill="#858EBD"
                      width="24"
                    >
                      <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                    </svg>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="rounded accent-secondary-0"
                  />
                  <label htmlFor="remember" className="text-sm font-Rubik">
                    Remember me on this device
                  </label>
                </div>
                <Link to="/forgot-password" relative="path">
                  <p className="text-sm text-secondary-0 font-Rubik font-medium cursor-pointer">
                    Forgot Password?
                  </p>
                </Link>
              </div>

              <div className="pt-8">
                <PrimaryButton
                  id="sign in"
                  value="Sign In"
                  onClick={logIn}
                ></PrimaryButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
