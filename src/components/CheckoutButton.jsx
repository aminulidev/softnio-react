
const CheckoutButton = ({cart, handleModalShow}) => {
	return (
		<button
			onClick={handleModalShow} type="button"
			className="fixed bottom-5 left-1/2 transform -translate-x-1/2 h-10.5 flex items-center justify-center gap-2.5 bg-warning px-6 py-3 text-sm font-bold text-titleText rounded-full shadow-button transition-all duration-300 hover:bg-opacity-90">
			Checkout
			<span className="w-5 h-5 flex items-center justify-center py-0.5 px-1.5 rounded bg-white text-xs">{cart.length}</span>
		</button>
	);
};

export default CheckoutButton;