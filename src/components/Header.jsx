import React from "react";
import BreadCrumb from "./BreadCrumb";

const Header = ({ pageTitle }) => {
	return (
		<section className="relative">
			{/* Background Gradient Blurs */}
			<div
				aria-hidden="true"
				className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
			>
				<div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
				<div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-primary"></div>
			</div>

			<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
				<div className="relative ml-auto">
					<BreadCrumb />
					<div className="lg:w-2/3 text-center mx-auto">
						<h1 className="text-gray-900 dark:text-white font-bold text-2xl md:text-4xl xl:text-6xl">
							{pageTitle}
						</h1>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Header;
