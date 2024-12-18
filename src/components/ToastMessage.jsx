
const ToastMessage = ({message, toastMessageRef}) => {
	return (
		<div ref={toastMessageRef} className={`w-fit fixed top-10 right-10 sm:top-auto sm:bottom-10 py-3 px-6 rounded bg-green-200 text-titleText text-sm font-medium opacity-0 transition-opacity duration-500`}>
			{message}
		</div>
	);
};

export default ToastMessage;