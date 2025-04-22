import React from "react";
import Artboard3 from "../assets/Artboard-3.png";
import Artboard4 from "../assets/Artboard-4.png";
import Artboard5 from "../assets/Artboard-5.jpg";
import Artboard6 from "../assets/Artboard-6.png";
import ServicesContentCard from "./ServicesContentCard";
import ServicesImageCard from "./ServicesImageCard";

export default function Services() {
	const cards = [
		{
			id: 1,
			title: "Strategic Print Procurement",
			description:
				"Unlocking cost efficiencies and quality excellence, our Strategic Print Procurement offers both centralized and decentralized approaches while optimizing your print investments.",
			linkText: "Read more",
		},
		{
			id: 2,
			imageSrc: Artboard3,
			imageTitle: "Retail Branding",
		},
		{
			id: 3,
			title: "In Store Displays POSM",
			description:
				"Whether it is an FSU or a CTU or any other stand-alone display, metal, wood or anything we design, produce and place such displays which create an immersive experience that turns browsers into buyers, and shelves into showcases.",
			linkText: "Read more",
		},
		{
			id: 4,
			imageSrc: Artboard4,
			imageTitle: "Creative Production Service",
		},
		{
			id: 5,
			title: "Retail Activation",
			description:
				"Elevate your brand’s impact with our BTL Activation Service – a dynamic approach to connect directly with your audience through personalized, memorable experiences.",
			linkText: "Read more",
		},
		{
			id: 6,
			imageSrc: Artboard5,
			imageTitle: "Event Marketing",
		},
		{
			id: 7,
			title: "Corporate Gifting",
			description:
				"From elegant executive presents to customized tokens of appreciation, we help you express gratitude and strengthen business relationships in style.",
			linkText: "Read more",
		},
		{
			id: 8,
			imageSrc: Artboard6,
			imageTitle: "Content Development",
		},
		{
			id: 9,
			title: "Retail Store Fabrication",
			description:
				"From concept to completion, we seamlessly handle every aspect, ensuring your store reflects your brand identity with precision and efficiency.",
			linkText: "Read more",
		},
	];
	return (
		<section id="services">
			<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
				<div className="mb-12 space-y-2 text-center">
					<p className="uppercase tracking-widest text-primary dark:text-white font-semibold underline underline-offset-4">
						Our Services
					</p>
					<h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
						Not just limited to branding
					</h2>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					{cards.map((card) => {
						return card.id % 2 !== 0 ? (
							<ServicesContentCard
								key={card.id}
								title={card.title}
								description={card.description}
								linkText={card.linkText}
							/>
						) : (
							<ServicesImageCard
								key={card.id}
								imageSrc={card.imageSrc}
								imageTitle={card.imageTitle}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}
