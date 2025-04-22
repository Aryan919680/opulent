import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
	const navigate = useNavigate();
		const openForm = () =>{
			navigate('/get-in-touch');
	}
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
				<div className="relative pt-36 ml-auto">
					<div className="lg:w-2/3 text-center mx-auto">
						<p className="uppercase text-primary dark:text-white tracking-widest font-semibold underline underline-offset-4 mb-4">
							Retail Advertisement Agency
						</p>
						<h1 className="text-gray-900 dark:text-white font-bold text-xl md:text-2xl xl:text-3xl">
							POSM Designing | POSM Fabrication |{" "}
							<span className="text-primary dark:text-white">
								Print Procurement
							</span>{" "}
							| Retail Branding | Marketing Campaign Management |{" "}
							<span className="text-primary dark:text-white">
								Store Fabrication
							</span>
						</h1>
						<p className="mt-8 text-gray-700 dark:text-gray-300">
							Providing branding strategy which turns the buying decision to YES
							in the Opulent of customer’s journey.
						</p>

						<div className="flex gap-4 justify-center items-center h-10 mt-8">
							{/* FontAwesome icons */}
							<i className="fa-brands fa-facebook fa-2xl text-primary dark:text-white dark:hover:text-primary hover:text-secondary cursor-pointer"></i>
							<i className="fa-brands fa-linkedin fa-2xl text-primary dark:text-white dark:hover:text-primary hover:text-secondary cursor-pointer"></i>
							<i className="fa-brands fa-instagram fa-2xl text-primary dark:text-white dark:hover:text-primary hover:text-secondary cursor-pointer"></i>
							<i className="fa-brands fa-twitter fa-2xl text-primary dark:text-white dark:hover:text-primary hover:text-secondary cursor-pointer"></i>
						</div>

						<div className="sm:mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
							<a
								href="#"
								className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
							>
								<button onClick={openForm}>
								<span className="relative text-base font-semibold text-white">
									Get in touch
								</span>
								</button>
								
							</a>
							<a
								href="#"
								className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
							>
								<span className="relative text-base font-semibold text-primary dark:text-white">
									Learn more
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
