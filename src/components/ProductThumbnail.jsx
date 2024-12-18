
const ProductThumbnail = ({src, thumbnailRef}) => {
	return (
		<div
			id="thumbnail-section"
			className="rounded flex items-center justify-center"
		>
			<img
				id="product-thumbnail"
				src={src}
				alt="Smartwatch"
				className="w-full rounded max-w-sm lg:max-w-full xl:max-h-128.5 xl:object-fill 2xl:max-h-fit 2xl:object-none 2xl:w-157.5"
				ref={thumbnailRef}
			/>
		</div>
	);
};

export default ProductThumbnail;