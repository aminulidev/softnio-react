import ProductThumbnail from "./ProductThumbnail.jsx";
import RatingCount from "./RatingCount.jsx";
import RadioButton from "./RadioButton.jsx";
import {useRef, useState} from "react";
import SizeButton from "./SizeButton.jsx";
import QuantityCounter from "./QuantityCounter.jsx";
import Heart from "../icons/Heart.jsx";
import CheckoutButton from "./CheckoutButton.jsx";
import ToastMessage from "./ToastMessage.jsx";
import CartModal from "./CartModal.jsx";

const Product = ({product}) => {
	const [bandColor, setBandColor] = useState(product.color);
	const [activeSize, setActiveSize] = useState(product.size);
	const [qty, setQty] = useState(product.qty);
	const [cart, setCart] = useState([]);
	const [isShowCheckout, setIsShowCheckout] = useState(false);
	const thumbnailRef = useRef(null);
	const toastMessageRef = useRef(null);
	const cartModalRef = useRef(null);


	const handleColorChange = color => {
		if (thumbnailRef.current) thumbnailRef.current.classList.add("slide-out");

		setTimeout(() => {
			setBandColor(color);
			product.color = color;
			product.image = `./img/${color}-device.png`;

			thumbnailRef.current.classList.remove("slide-out");
			thumbnailRef.current.classList.add("slide-in");
			setTimeout(() => thumbnailRef.current.classList.remove("slide-in"), 300);
		}, 300);
	}

	const handleSizeChange = (size, price) => {
		setActiveSize(size);
		product.size = size;
		product.price = price;
	}

	// Handle quantity decrement
	const handleDecrement = () => {
		setQty((prevQty) => Math.max(prevQty - 1, 1));
	};

	// Handle quantity increment
	const handleIncrement = () => {
		setQty((prevQty) => prevQty + 1);
	};

	// Toast message
	const showToastMessage = () => {
		toastMessageRef.current.classList.remove("opacity-0");
		toastMessageRef.current.classList.add("opacity-100");

		setTimeout(() => {
			toastMessageRef.current.classList.remove("opacity-100");
			toastMessageRef.current.classList.add("opacity-0");
		}, 5000);
	};

	// Add to cart logic
	const handleAddToCart = () => {
		setCart((prevCart) => {
			// Check if the product already exists in the cart
			const existingProductIndex = prevCart.findIndex(
				(item) => item.price === product.price && item.size === product.size && item.color === product.color
			);

			if (existingProductIndex !== -1) {
				// If the product exists, update the quantity
				const updatedCart = [...prevCart];
				const existingProduct = updatedCart[existingProductIndex];

				updatedCart[existingProductIndex] = {
					...existingProduct,
					qty: existingProduct.qty + qty, // Use the current qty from state
				};
				return updatedCart;
			} else {
				// If the product does not exist, add it to the cart
				const newProduct = { ...product, qty };
				return [...prevCart, newProduct];
			}
		});

		setQty(1);
		setIsShowCheckout(true);
		showToastMessage();
	};

	const handleModalShow = () => {
		cartModalRef.current.classList.toggle("opacity-0");
		cartModalRef.current.classList.toggle("pointer-events-none");
		cartModalRef.current.classList.toggle("opacity-100");
		const modal_content = cartModalRef.current.querySelector(".modal_content");
		modal_content.classList.toggle("scale-95");
		modal_content.classList.toggle("scale-100");
	}
	
	return (
		<>
			<main className="min-h-screen flex items-center justify-center px-4 py-15 pb-20 md:px-15 xl:py-30">
				<div className="max-w-330 mx-auto grid grid-cols-1 content-center gap-8 lg:gap-15 lg:grid-cols-2">
					{/* Thumbnail */}
					<ProductThumbnail src={`./img/${bandColor}-device.png`} thumbnailRef={thumbnailRef}/>

					{/* Product Info */}
					<div className="flex flex-col justify-center gap-5">
						{/* Title */}
						<div className="space-y-3">
							<h1 className="text-3xl md:text-10 font-bold text-titleText">{product.name}</h1>
							<RatingCount rating={product.rating} ratingCount={product.ratingCount}/>
						</div>
						{/* Price */}
						<div className="flex items-center gap-1">
							<p className="text-xl text-descriptionText font-normal line-through">$99.00</p>
							<p className="text-2xl font-bold text-blue-600">${product.price}</p>
						</div>
						{/* Description */}
						<p className="text-lg font-normal text-descriptionText">{product.description}</p>
						{/* Type */}
						<div className="text-sm font-normal text-descriptionText flex items-center gap-11">
							<div className="space-y-0.5">
								<p>Type</p>
								<p className="text-base font-bold text-titleText">{product.type}</p>
							</div>
							<div className="space-y-0.5">
								<p>Model Number</p>
								<p className="text-base font-bold text-titleText">{product.model}</p>
							</div>
						</div>
						{/* Band Colors */}
						<div className="space-y-2.5">
							<h3 className="text-lg font-bold text-titleText">Band Color</h3>
							<div className="flex gap-5">
								<RadioButton className="bg-purple-500" name="product-color" color="purple"
											 onChange={handleColorChange} isChecked={true}/>
								<RadioButton className="bg-cyan-500" name="product-color" color="cyan"
											 onChange={handleColorChange}/>
								<RadioButton className="bg-blue-500" name="product-color" color="blue"
											 onChange={handleColorChange}/>
								<RadioButton className="bg-black-500" name="product-color" color="black"
											 onChange={handleColorChange}/>
							</div>
						</div>
						{/* Sizes */}
						<div className="space-y-2.5">
							<h3 className="text-lg font-bold text-titleText">Wrist Size</h3>
							<div className="flex items-center gap-2 sm:gap-3">
								<SizeButton
									handleSizeChange={handleSizeChange}
									size="S" price={69}
									isActive={activeSize === "S"}
								/>
								<SizeButton
									handleSizeChange={handleSizeChange}
									size="M" price={79}
									isActive={activeSize === "M"}
								/>
								<SizeButton
									handleSizeChange={handleSizeChange}
									size="L" price={89}
									isActive={activeSize === "L"}
								/>
								<SizeButton
									handleSizeChange={handleSizeChange}
									size="XL" price={99}
									isActive={activeSize === "XL"}
								/>
							</div>
						</div>
						{/* Quantity and Add to Cart */}
						<div className="flex items-center gap-3">
							<QuantityCounter
								qty={qty}
								handleDecrement={handleDecrement}
								handleIncrement={handleIncrement}
							/>
							<button
								onClick={() => handleAddToCart()}
								type="button" className="button_primary"
							>
								Add to Cart
							</button>
							<button type="button">
								<Heart/>
							</button>
						</div>
					</div>
				</div>
			</main>

			{/* Toast message */}
			<ToastMessage
				toastMessageRef={toastMessageRef}
				message="Product added to cart successfully!"
			/>

			{/* Floating Checkout Button */}
			{isShowCheckout ?
				<CheckoutButton
					handleModalShow={handleModalShow}
					cart={cart}
				/>
				: null
			}

			{/* Cart Modal */}
			<CartModal
				cart={cart}
				title="Your Cart"
				cartModalRef={cartModalRef}
				handleModalShow={handleModalShow}
			/>
		</>
	);
};

export default Product;