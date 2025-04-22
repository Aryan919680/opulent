import React from "react";
import bg from "../assets/brands-bg.jpeg";
import tick from "../assets/tick.svg";

const CommonText = ({ pageHeading }) => {
	return (
		<>
			<section>
				<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 ">
					<div className="mb-8 md:w-2/3 lg:w-1/2">
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
								Our Service
							</p>
							<h2 className="text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
								{pageHeading}
							</h2>
						</div>
						<p className="text-gray-600 dark:text-gray-300">
							Every employee, client, or important people in a business network
							need a feel-good factor when working or running a business.
							Appreciating and acknowledging the contribution of each and every
							person with corporate gifts helps to maintain a healthy
							professional relationship. When it comes to Last 3 Feet, we focus
							on –
						</p>
					</div>
					<div>
						<img src={bg} alt="bg" className="max-h-[500px] w-full" />
					</div>
					<div className="mt-8 flex justify-evenly items-start flex-wrap gap-8 sm:gap-0">
						<div className="w-full sm:w-3/5">
							<div className="text-gray-600 dark:text-gray-300">
								<p>
									<strong>Branded Office Supplies:</strong> Mark the products,
									items, gifts and more of your brand with its respective logo
									to increase the visibility of your business.
								</p>
								<p className="my-4">
									<strong>Customised Promotional Products:</strong> Custom-made
									products to ensure that it helps in promoting your brand in
									the market.
								</p>
								<p>
									<strong>Festive Gifting:</strong> When the season of festival
									arrives, providing gifts as per the occasion will help in
									connecting with your professional network.
								</p>
							</div>
							<div>
								<h2 className="text-2xl font-bold mt-8 mb-4">Why do this?</h2>
								<p className="text-gray-600 dark:text-gray-300">
									Corporate gifting is an act of showing gratitude towards the
									important people in your business that you value. Performing
									this on a regular basis motivates employees to do well and
									also improves a brand’s image in the market. For the purpose
									of corporate gifting, collaborate with us today!
								</p>
								<ul className="list-disc ps-12 mt-4 text-gray-600 dark:text-gray-300">
									<li>Nice way to strengthen professional relations</li>
									<li>Motivates the employees to perform better</li>
									<li>Healthy work environment</li>
									<li>Building strong networks</li>
									<li>Excellent return on investment</li>
								</ul>
							</div>
						</div>
						<div className="w-full sm:w-fit ">
							<h2 className="text-2xl font-bold mb-4">Service Include</h2>
							<ul className="list-none  mt-4 text-gray-600 dark:text-gray-300">
								<li>
									<span className="w-4 inline-block">
										<img src={tick} alt="tick" className="w-full" />
									</span>
									Concept Art
								</li>
								<li>
									{" "}
									<span className="w-4 inline-block">
										<img src={tick} alt="tick" className="w-full" />
									</span>
									Development
								</li>
								<li>
									{" "}
									<span className="w-4 inline-block">
										<img src={tick} alt="tick" className="w-full" />
									</span>
									10x Revisions
								</li>
								<li>
									{" "}
									<span className="w-4 inline-block">
										<img src={tick} alt="tick" className="w-full" />
									</span>
									Raw Files
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default CommonText;
