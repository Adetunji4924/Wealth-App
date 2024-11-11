import { useState } from "react";
import Banner from "../Components/Banner";
import PrimaryButton from "../Components/pri-button";
import SecondaryButton from "../Components/sec-button";
import { Link } from "react-router-dom";
import SelectOccupation from "../Components/select-occupation";
import SelectCity from "../Components/select-city";
import SuccessModal from "../Components/success-modal";

const BasicInformation = () => {
  const occupations = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
  ];
  const city = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

  const [isModalOpen, setModalOpen] = useState(false);

  const handleCreateAccount = () => {
    // Simulate account creation logic here
    // When account is created, open the modal
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="h-screen flex overflow-hidden">
      <Banner />
      <div className="w-[65%] px-8 py-8">
        <div className="flex justify-end gap-4 items-center">
          <span className="text-text1-0 font-Rubik text-[1rem]">
            Already have an account?
          </span>
          <Link to="/" relative="path">
            <SecondaryButton id={"Sign In"} value={"Sign In"}></SecondaryButton>
          </Link>
        </div>
        <div className="flex justify-center items-center h-full">
          <div className="w-[80%] p-8">
            <div className="mb-8">
              <h1 className="text-[2rem] font-Rubik text-text2-0 font-bold">
                YOUR BASIC INFORMATION
              </h1>
              <p className="font-Rubik text-[1rem] text-text1-0">
                Please complete your basic information
              </p>
            </div>

            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                handleCreateAccount();
              }}
              className="space-y-6"
            >
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between gap-4">
                  {" "}
                  {/*for the name section*/}
                  <div className="flex flex-col w-[50%]">
                    {" "}
                    {/*for first name name*/}
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium pb-2 text-text2-0"
                    >
                      First Name
                    </label>
                    <input
                      className="border border-tertiary-0 px-2 py-2 rounded focus:border-secondary-0 focus:outline-none font-Rubik text-[1rem]"
                      placeholder="sample@gmail.com"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col w-[50%]">
                    {" "}
                    {/*for last name*/}
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium pb-2 text-text2-0"
                    >
                      Last Name
                    </label>
                    <input
                      className="border border-tertiary-0 px-2 py-2 rounded focus:border-secondary-0 focus:outline-none font-Rubik text-[1rem]"
                      placeholder="sample@gmail.com"
                      type="text"
                    />
                  </div>
                </div>

                {/* For occupation section */}
                <SelectOccupation optionsArray={occupations} />

                {/* For company section */}
                <div className="flex flex-col">
                  <label
                    htmlFor="company"
                    className="text-sm font-medium pb-2 text-text2-0"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="border border-tertiary-0 px-2 py-2 rounded focus:border-secondary-0 focus:outline-none font-Rubik text-[1rem]"
                  />
                </div>

                {/* For city and zip code */}
                <div className="flex gap-4">
                  <SelectCity optionsArray={city} />
                  <div className="flex flex-col w-[50%] space-y-3">
                    <label
                      htmlFor="company"
                      className="text-sm font-medium text-text2-0"
                    >
                      Zip Code
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      className="border border-tertiary-0 px-2 py-2 rounded focus:border-secondary-0 focus:outline-none font-Rubik text-[1rem]"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-8 flex justify-between items-center">
                <PrimaryButton
                  onClick={handleCreateAccount}
                  id="Confirm"
                  value="Confirm"
                />

                <Link
                  to="/"
                  relative="path"
                  className="flex items-center gap-2"
                >
                  <p className="text-text1-0 font-Rubik ">Skip</p>
                  <svg
                    className="w-4"
                    fill="#6A74A5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                  </svg>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <SuccessModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default BasicInformation;
