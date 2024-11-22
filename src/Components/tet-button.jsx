const TertiaryButton = ({ id, value, onClick }) => {
    return (
        <button type="button" onClick={onClick} id={id} className="bg-white px-12 py-3 text-[1rem] text-secondary-0 rounded-full font-medium shadow-md shadow-[#B3C0E7]">{value}</button>
        
    )
}

export default TertiaryButton