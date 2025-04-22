import React from "react";
import planetEarth from "../assets/planet-earth.png";
import creativity from "../assets/creativity.png";
import search from "../assets/search.png";
import agile from "../assets/agile.png";
import satisfaction from "../assets/satisfaction.png";
import upcycling from "../assets/upcycling.png";
import AboutCard from "./AboutCard";

export default function About() {
	const cards = [
		{
			id: 1,
			image: planetEarth,
			title: "Global Perspective",
			description:
				"Opulent Marketing Solutions embraces a global perspective. Whether your brand operates locally or globally, we incorporate cultural insights and global trends into our strategies to resonate with diverse audiences.",
		},
		{
			id: 2,
			image: creativity,
			title: "Creativity with Purpose",
			description:
				"We infuse creativity with a purpose. Every innovative idea is crafted to serve a strategic goal, ensuring that our creative endeavors contribute meaningfully to your brand’s narrative.",
		},
		{
			id: 3,
			image: search,
			title: "Transparency",
			description:
				"Building trust is paramount. We maintain transparency in our processes, providing clear insights into our methodologies, progress, and results to foster a strong, trustworthy partnership.",
		},
		{
			id: 4,
			image: agile,
			title: "Agility in Execution",
			description:
				"Our agility extends beyond strategy to execution. We respond promptly to market changes, allowing us to adapt our campaigns swiftly and capitalize on emerging opportunities.",
		},
		{
			id: 5,
			image: satisfaction,
			title: "Client-Centric",
			description:
				"Your success is our priority. We are committed to understanding your unique needs and tailoring marketing solutions that align with your brand vision and goals.",
		},
		{
			id: 6,
			image: upcycling,
			title: "Sustainability",
			description:
				"Your success is our priority. We are committed to understanding your unique needs and tailoring marketing solutions that align with your brand vision and goals.",
		},
	];
	return (
		<section>
			<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
				{/* Heading */}
				<div className="md:w-2/3 lg:w-1/2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-6 h-6 text-secondary"
					>
						<path
							fillRule="evenodd"
							d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
							clipRule="evenodd"
						/>
					</svg>
					<div className="my-8">
						<p className="uppercase tracking-widest text-primary dark:text-white font-semibold underline underline-offset-4">
							About us
						</p>
						<h2 className="text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
							From Concept to Connection: Crafting Unforgettable Offline Brand
							Journeys
						</h2>
					</div>
					<p className="text-gray-600 dark:text-gray-300">
						At Opulent, we believe that the final strides a customer takes
						toward your brand can be the most defining. The essence of branding
						lies not just in the digital realm, but in the tangible and
						impactful moments that happen when a customer is within arm’s reach
						of your product. We specialize in curating that crucial last leg of
						the customer journey, where a brand’s story transforms into a real,
						tangible experience.
					</p>
				</div>

				{/* Cards */}
				<div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0 xl:grid-cols-3">
					{/* 1 */}
					{/* <AboutCard
						image={planetEarth}
						title={
							<h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
								Global Perspective
							</h5>
						}
						description={
							<p className="text-gray-600 dark:text-gray-300">
								Last3Feet Marketing Solutions embraces a global perspective.
								Whether your brand operates locally or globally, we incorporate
								cultural insights and global trends into our strategies to
								resonate with diverse audiences.
							</p>
						}
					/> */}

					{cards.map((card) => (
						<AboutCard
							key={card.id}
							image={card.image}
							title={card.title}
							description={card.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
