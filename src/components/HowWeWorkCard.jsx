import React from "react";

const HowWeWorkCard = ({ imgSrc, title, description }) => {
	return (
		<>
			<div className="p-8 border border-gray-100 rounded-3xl dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none text-gray-700 dark:text-white">
				<img
					src={imgSrc}
					alt="Requirement Analysis"
					className="w-full h-52 object-cover grayscale rounded-3xl hover:grayscale-0 transition duration-300 mb-4"
				/>
				<div>
					<h6 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-white">
						{title}
					</h6>
					<p className="mt-4 font-thin">{description}</p>
				</div>
			</div>
		</>
	);
};

export default HowWeWorkCard;
