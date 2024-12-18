
const CartModal = ({cart, title, cartModalRef, handleModalShow}) => {
	const totalPrice = cart.reduce((total, item) => total + (item.price * item.qty), 0);
	const totalQty = cart.reduce((total, item) => total + item.qty, 0);

	return (
		<div
			ref={cartModalRef}
			className="fixed inset-0 bg-overlay px-5 h-screen flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300">
			<div
				className="modal_content bg-white rounded-lg w-full max-w-162.5 p-5 md:p-11 space-y-4 relative overflow-y-auto max-h-[90vh] scrollbar-hide transform scale-95 transition-transform duration-300">
				<h2 className="text-5.5 leading-6 font-bold text-titleText">{title}</h2>
				{/* cart table */}
				<div className="overflow-x-auto">
					<table className="w-full text-nowrap text-center">
						<thead className="text-sm font-normal text-descriptionText">
						<tr className="h-6">
							<th className="min-w-64 w-4/12 text-left pb-2 border-b border-b-border">
								Item
							</th>
							<th className="w-2/12 pb-2 border-b border-b-border px-4">
								Color
							</th>
							<th className="w-2/12 pb-2 border-b border-b-border px-4">
								Size
							</th>
							<th className="w-2/12 pb-2 border-b border-b-border px-4">Qnt</th>
							<th className="w-2/12 text-end pb-2 border-b border-b-border">
								Price
							</th>
						</tr>
						</thead>
						<tbody id="cart-items">
						{cart.map((item, index) => (
							<tr key={index} className="h-9 text-sm font-normal text-titleText">
								<td className="min-w-64 w-4/12 flex items-center gap-2 py-4 border-b border-b-border">
									<img
										className="rounded w-9 h-9"
										src={item.image}
										alt={item.name}
									/>
									<span>{item.name}</span>
								</td>
								<td className="w-2/12 py-4 border-b border-b-border px-4 capitalize">
									{item.color}
								</td>
								<td className="w-2/12 py-4 border-b border-b-border px-4">{item.size}</td>
								<td className="w-2/12 py-4 border-b border-b-border px-4">{item.qty}</td>
								<td className="w-2/12 text-end py-4 border-b border-b-border">
									${item.price * item.qty}
								</td>
							</tr>
						))}

						</tbody>
						<tfoot className="font-bold text-base text-titleText">
						<tr>
							<td className="min-w-64 w-4/12 text-left py-4 border-b border-b-border">
								Total
							</td>
							<td
								className="w-2/12 py-4 border-b border-b-border px-4"
								colSpan={2}
							/>
							<td className="w-2/12 py-4 border-b border-b-border px-4">{totalQty}</td>
							<td className="w-2/12 text-end py-4 border-b border-b-border">
								${totalPrice}
							</td>
						</tr>
						</tfoot>
					</table>
				</div>
				<div className="flex justify-end items-center gap-6">
					<button
						onClick={handleModalShow}
						type="button" className="button_secondary">
						Continue Shopping
					</button>
					<button className="button_primary">Checkout</button>
				</div>
			</div>
		</div>
	);
};

export default CartModal;