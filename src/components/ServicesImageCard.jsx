import React from "react";

const ServicesImageCard = ({ imageSrc, imageTitle }) => {
	return (
		<>
			<div className="relative group border border-gray-100 rounded-3xl overflow-hidden dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none w-full h-fit">
				<img
					src={imageSrc}
					alt="Retail Branding"
					className="w-full h-auto grayscale group-hover:grayscale-0 transition duration-300"
				/>
				<h2
					className="text-xl lg:text-5xl md:text-3xl text-center uppercase font-bold text-secondary/0 group-hover:text-secondary transition duration-300 backdrop-blur-sm group-hover:backdrop-blur-none h-full flex items-center justify-center absolute inset-0"
					style={{ WebkitTextStroke: "1px #ff7e33" }}
				>
					{imageTitle}
				</h2>
			</div>
		</>
	);
};

export default ServicesImageCard;
