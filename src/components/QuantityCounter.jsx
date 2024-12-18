import Minus from "../icons/Minus.jsx";
import Plus from "../icons/Plus.jsx";

const QuantityCounter = ({qty, handleDecrement, handleIncrement}) => {
	return (
		<div className="flex items-center">
			<button
				onClick={() => handleDecrement()} disabled={qty === 1} type="button"
				className="w-9 h-9 flex items-center justify-center text-lg px-2 py-1 border border-border rounded-s text-descriptionText transition-all duration-300 group disabled:bg-border disabled:cursor-not-allowed"
			>
				<Minus/>
			</button>
			<div
				className="min-w-15 h-9 flex items-center justify-center border border-border border-x-0 text-sm text-titleText">
				{qty}
			</div>
			<button
				onClick={() => handleIncrement()} disabled={qty === 5} type="button"
				className="w-9 h-9 flex items-center justify-center text-lg px-2 py-1 border border-border rounded-e text-descriptionText transition-all duration-300 group disabled:bg-border disabled:cursor-not-allowed"
			>
				<Plus/>
			</button>
		</div>
	);
};

export default QuantityCounter;