
const RadioButton = ({name, color, isChecked, onChange, className}) => {
	return (
		<label htmlFor={`color-${color}`} className={`input_radio ${className ? className : ""}`}>
			<input
				defaultChecked={isChecked}
				type="radio"
				name={name}
				id={`color-${color}`}
				defaultValue={color}
				className="hidden peer"
				onChange={() => onChange(color)}
			/>
			<span className={`block w-4 h-4 rounded-full peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-${color}-500`} />
		</label>
	);
};

export default RadioButton;