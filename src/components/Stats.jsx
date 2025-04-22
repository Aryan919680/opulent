import React from "react";

export default function Stats() {
	return (
		<section id="stats" className="relative py-20">
			{/* Background Gradient Blurs */}
			<div
				aria-hidden="true"
				className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
			>
				<div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
				<div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-primary"></div>
			</div>

			<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
				<div className="mb-12 space-y-2 text-center">
					<h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
						Our Achievement
					</h2>
					<p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
						Take a look at some of our key metrics and achievements that
						showcase our success and growth.
					</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-6 uppercase tracking-widest font-semibold">
					<div className="text-center">
						<h2
							className="text-4xl font-bold text-transparent"
							style={{ WebkitTextStroke: "2px #9333ea" }}
						>
							1.5+
						</h2>
						<p className="text-gray-600 dark:text-gray-300">
							Billion INR Marketing Spend Managed
						</p>
					</div>
					<div className="text-center">
						<h2
							className="text-4xl font-bold text-transparent"
							style={{ WebkitTextStroke: "2px #9333ea" }}
						>
							1,000+
						</h2>
						<p className="text-gray-600 dark:text-gray-300">Project Managed</p>
					</div>
					<div className="text-center">
						<h2
							className="text-4xl font-bold text-transparent"
							style={{ WebkitTextStroke: "2px #9333ea" }}
						>
							150+
						</h2>
						<p className="text-gray-600 dark:text-gray-300">
							Strong Partner Base Pan India
						</p>
					</div>
					<div className="text-center">
						<h2
							className="text-4xl font-bold text-transparent"
							style={{ WebkitTextStroke: "2px #9333ea" }}
						>
							40+
						</h2>
						<p className="text-gray-600 dark:text-gray-300">Clients Handled</p>
					</div>
				</div>
			</div>
		</section>
	);
}
