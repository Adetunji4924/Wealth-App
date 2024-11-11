const PrimaryButton = ({ id, value, onClick }) => {
    return (
        <button type="button" onClick={onClick} className="bg-gradient-to-r from-[#4F8AFF] to-secondary-0 px-12 py-3 text-white text-[1rem] rounded-full font-medium shadow-lg shadow-[#B3C0E7]" id={id}>{value}</button>
    )
}

export default PrimaryButton