// import { useState } from "react";

// const SelectOccupation = ({ options }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedOption, setSelectedOption] = useState("");

//   // Filter options based on the search term
//   const filteredOptions = options.filter(option =>
//     option.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSelectChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   return (
//     <div className="flex flex-col gap-2">
//       {/* Search Input */}
//       <input
//         type="text"
//         placeholder="Search options..."
//         value={searchTerm}
//         onChange={handleSearchChange}
//         className="border px-2 py-1 rounded focus:outline-none focus:ring focus:border-blue-500"
//       />

//       {/* Select Dropdown */}
//       <select
//         value={selectedOption}
//         onChange={handleSelectChange}
//         className="border px-2 py-1 rounded focus:outline-none focus:ring focus:border-blue-500"
//       >
//         <option value="">Select an option...</option>
//         {filteredOptions.map((option, index) => (
//           <option key={index} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default SelectOccupation;


import { useState, useEffect, useRef } from "react";

const SelectOccupation = ({ optionsArray }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredOptions, setFilteredOptions] = useState(optionsArray);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
  
    // Filter options based on search term
    useEffect(() => {
      setFilteredOptions(
        optionsArray.filter(option =>
          option.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }, [searchTerm, optionsArray]);
  
    // Handle click outside to close dropdown
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsDropdownOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
    // Handle input change and show dropdown
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
      setIsDropdownOpen(true); // Open dropdown on typing
    };
  
    // Select an option and close dropdown
    const handleOptionSelect = (option) => {
      setSearchTerm(option);
      setIsDropdownOpen(false);
    };
  
    return (
      <div className="relative w-full mt-2 space-y-2" ref={dropdownRef}>
        {/* Input field for searching/selecting */}
        <label htmlFor="occupation" className="text-sm font-medium text-text2-0">Occupation</label>
        <input
          type="text"
          placeholder="Select or search an option..."
          value={searchTerm}
          onChange={handleSearchChange}
          onClick={() => setIsDropdownOpen(true)}
          className="w-full border border-tertiary-0 px-2 py-2 rounded focus:border-secondary-0 focus:outline-none font-Rubik text-[1rem]"
        />
  
        {/* Dropdown options */}
        {isDropdownOpen && (
          <div className="absolute z-10 w-full bg-white border rounded shadow mt-1 max-h-40 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className="px-2 py-2 hover:bg-primary-0 cursor-pointer text-text1-0"
                >
                  {option}
                </div>
              ))
            ) : (
              <div className="px-2 py-2 text-text1-0">No options found</div>
            )}
            
          </div>
        )}

<svg onClick={() => setIsDropdownOpen(true)} className="cursor-pointer absolute right-2 w-4 top-9" fill="#6A74A5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
      </div>
    );
};

export default SelectOccupation;
