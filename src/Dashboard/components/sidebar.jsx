import { Link, useLocation } from "react-router-dom";
import { sidebarLinks1,sidebarLinks2, sidebarLinks3 } from "./sidebardata";

const DashboardSidebar = () => {

    const location = useLocation();
  return (
    <div className="bg-[#222653] w-[20%] h-screen fixed top-0 left-0 p-4">
      <nav className="mt-[5rem]">
                <ul className="space-y-4">
                    {sidebarLinks1.map((link, index) => (
                        <li key={index} className="text-sidebar-0 text-[1rem] font-Rubik">
                            <Link
                                to={link.path}
                                className={`flex items-center gap-4 py-4 px-6 rounded-md transition duration-200 ${
                                    location.pathname === link.path
                                        ? "bg-secondary-0 text-white font-semibold"
                                        : "hover:bg-secondary-0"
                                }`}
                            >
                                {link.icon}
                                <span className="">{link.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                
                <p className="mt-4 px-2 text-[#8DA0C4] font-[.9rem] opacity-60">Other Information</p>
                <ul className="space-y-4">
                    {sidebarLinks2.map((link, index) => (
                        <li key={index} className="text-sidebar-0 text-[1rem] font-Rubik">
                            <Link
                                to={link.path}
                                className={`flex items-center gap-4 py-4 px-6 rounded-md transition duration-200 ${
                                    location.pathname === link.path
                                        ? "bg-secondary-0 text-white font-semibold"
                                        : "hover:bg-secondary-0"
                                }`}
                            >
                                {link.icon}
                                <span className="">{link.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <p className="mt-4 px-2 text-[#8DA0C4] font-[.9rem] opacity-60">Settings</p>
                <ul className="space-y-4">
                    {sidebarLinks3.map((link, index) => (
                        <li key={index} className="text-sidebar-0 text-[1rem] font-Rubik">
                            <Link
                                to={link.path}
                                className={`flex items-center gap-4 py-4 px-6 rounded-md transition duration-200 ${
                                    location.pathname === link.path
                                        ? "bg-secondary-0 text-white font-semibold"
                                        : "hover:bg-secondary-0"
                                }`}
                            >
                                {link.icon}
                                <span className="">{link.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
    </div>
  );
};

export default DashboardSidebar;
