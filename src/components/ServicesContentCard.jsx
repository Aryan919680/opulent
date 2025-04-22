import React from "react";

const ServicesContentCard = ({ title, description, linkText }) => {
	return (
		<>
			<div className="p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none text-gray-700 dark:text-white flex justify-center items-center">
				<div>
					<h6 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-white">
						{title}
					</h6>
					<p className="mt-4">{description}</p>
					<div className="group">
						<a
							href="#"
							className="flex items-center justify-between group-hover:text-secondary mt-4"
						>
							<span className="text-sm uppercase">{linkText}</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
							>
								<path
									fillRule="evenodd"
									d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
									clipRule="evenodd"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default ServicesContentCard;
