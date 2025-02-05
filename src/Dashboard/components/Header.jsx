import logo from "../../assets/Logo black.svg";
import avatar from "../../assets/32.png"

const DashboardHeader = () => {
    return(
        <div className="bg-white flex justify-between items-center px-[2rem] py-2 fixed z-10 w-full">
            {/* Logo */}
            <div>
                <img src={logo} alt="wealth" />
            </div>
            <div className="flex gap-6 justify-center items-center">
                {/* search bar */}
                <div className="relative">
                    <input className="py-2 pl-10 pr-2 rounded-full bg-dashboard-0 focus:outline-none text-[.9rem]" placeholder="Search" type="search" name="search-customer" id="search-customer" />
                    <svg className="w-4 absolute top-3 left-4" fill="#858EBD" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                </div>

                {/* Notification */}
                <div className="relative">
                    <div className="bg-red-500 rounded-full text-center absolute top-0 right-0 w-4 p-0.5">
                        <p className="text-white font-Rubik text-[.5rem] font-medium">5</p>
                    </div>
                <svg className="w-6" fill="#858EBD" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>
                </div>


                {/* Avatar */}
                <div>
                    <img src={avatar} alt="" />
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader