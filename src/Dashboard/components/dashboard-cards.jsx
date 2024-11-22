const cardStats = [
    {
      title: "Active Sessions",
      stats: "132",
      percentage: "17%",
    },
    {
      title: "New Customers",
      stats: "23",
      percentage: "8%",
    },
    {
      title: "Total Customers",
      stats: "864",
      percentage: "13%",
    },
    {
      title: "Completed Sessions",
      stats: "47",
      percentage: "31%",
    },
  ];
  
  const UpArrowIcon = () => (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.293 11.7068C0.684 12.0978 1.316 12.0978 1.707 11.7068L10 3.41375V8.99975C10 9.55175 10.447 9.99975 11 9.99975C11.553 9.99975 12 9.55175 12 8.99975V0.99975C12 0.44775 11.553 -0.000249863 11 -0.000249863H3C2.447 -0.000249863 2 0.44775 2 0.99975C2 1.55175 2.447 1.99975 3 1.99975H8.586L0.293 10.2928C-0.098 10.6838 -0.098 11.3158 0.293 11.7068"
        fill="#858EBD"
      />
    </svg>
  );
  
  const DownArrowIcon = () => (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.707 0.293006C11.316 -0.0979941 10.684 -0.0979941 10.293 0.293006L2 8.58601V3.00001C2 2.44801 1.553 2.00001 1 2.00001C0.447 2.00001 0 2.44801 0 3.00001V11C0 11.552 0.447 12 1 12H9C9.553 12 10 11.552 10 11C10 10.448 9.553 10 9 10H3.414L11.707 1.70701C12.098 1.31601 12.098 0.684006 11.707 0.293006"
        fill="#858EBD"
      />
    </svg>
  );
  
  const DashboardCard = () => {
    return (
      <div className="flex justify-between items-center gap-6 mt-8">
        {cardStats.map((item, index) => {
          const percentageValue = parseInt(item.percentage, 10);
          const Icon = percentageValue >= 10 ? UpArrowIcon : DownArrowIcon;
  
          return (
            <div
              key={index}
              className="bg-white w-[25%] rounded py-8 px-4 shadow-md"
            >
              <p className="text-[.9rem] text-gray-600 font-Rubik">{item.title}</p>
              <div className="flex justify-between mt-2 items-center">
                <p className="text-[1.8rem] font-medium font-Rubik text-gray-800">
                  {item.stats}
                </p>
                <div className="flex items-center gap-1">
                  <span className={`${percentageValue >= 10 ? "text-[#00D0B5]": "text-[#FF2855]"} text-sm"`}>{item.percentage}</span>
                  <Icon />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default DashboardCard;
  