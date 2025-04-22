import React from "react";

const WhyChooseUs = () => {
	const cards = [
		{
			id: 1,
			title: "End to end solution",
			description:
				"From doing market research to designing, fabricating and executing, we do it all.",
		},
		{
			id: 2,
			title: "Innovative Approach",
			description:
				"We redefine the customer journey’s final moments through innovative strategies, creating memorable experiences that set your brand apart.",
		},
		{
			id: 3,

			title: "Global Perspective",
			description:
				"Whether your brand operates locally or globally, our global perspective integrates cultural insights, ensuring resonance with diverse audiences.",
		},
		{
			id: 4,
			title: "Highly focused team",
			description:
				"Our agency operates on the basis of a staff approach wherein we all work as an integrated team.",
		},
		{
			id: 5,
			title: "Expertise Across Industries",
			description:
				"With a diverse portfolio, we bring expertise across various industries, ensuring that our strategies are adaptable and effective in different market landscapes.",
		},
		{
			id: 6,

			title: "Pan India Coverage",
			description:
				"Not only limited to providing services in a particular region. We cover Pan India, a reason for our flexibility on which you can count on!",
		},
	];
	return (
		<>
			<section>
				<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
					<div className="mb-12 space-y-2 text-center">
						<p className="uppercase tracking-widest text-primary dark:text-white font-semibold underline underline-offset-4">
							Why Choose Us
						</p>
						<h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white max-w-2xl mx-auto">
							“A one stop destination for all your marketing needs!”
						</h2>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
						{/* Cards */}
						{cards.map((card) => (
							<div className=" overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 shadow-md">
								<div className="sm:flex sm:justify-between sm:gap-4">
									<div>
										<h3 className="text-lg font-bold text-gray-900 sm:text-xl">
											{card.title}
										</h3>
									</div>
								</div>

								<div className="mt-4">
									<p className="text-pretty text-sm text-gray-500">
										{card.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default WhyChooseUs;
