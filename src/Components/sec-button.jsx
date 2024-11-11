const SecondaryButton = (props) => {
  return (
    <button
      className="border border-secondary-0 px-8 py-2 rounded-full text-secondary-0 font-Rubik text-[1rem] hover:text-white hover:bg-gradient-to-r hover:from-[#4F8AFF] hover:to-secondary-0 font-medium cursor-pointer"
      id={props.id}
    >
      {props.value}
    </button>
  );
};

export default SecondaryButton;
