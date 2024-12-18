import StarFill from "../icons/StarFill.jsx";
import StartHalf from "../icons/StartHalf.jsx";
import Star from "../icons/Star.jsx";

const RatingCount = ({rating, ratingCount}) => {
	const maxRating = 5;

	return (
		<div className="flex items-center gap-2">
			<div className="flex items-center gap-1">
				{[...Array(maxRating)].map((_, index) => {
					const currentRating = index + 1;

					if (currentRating <= Math.floor(rating)) {
						return <StarFill key={index} />;
					} else if (currentRating - rating < 1 && currentRating > rating) {
						return <StartHalf key={index} />;
					} else {
						return <Star key={index} />;
					}
				})}
			</div>
			<span className="text-sm text-descriptionText">({ratingCount} Reviews)</span>
		</div>
	);
};

export default RatingCount;