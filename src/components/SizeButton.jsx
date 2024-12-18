
const SizeButton = ({size, price, handleSizeChange, isActive}) => {
	return (
		<button
			onClick={() => handleSizeChange(size, price)}
			className={`size-option button_size ${isActive ? "active" : ""}`}>
			<span className="size capitalize">{size}</span>
			<span className="price">${price}</span>
		</button>
	);
};

export default SizeButton;