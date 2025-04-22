import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
	return (
		<>
			<section className="space-y-40 mb-40">
				<section className="relative h-screen">
					{/* Background Gradient Blurs */}
					<div
						aria-hidden="true"
						className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
					>
						<div className="blur-[106px] h-screen bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
						<div className="blur-[106px] h-[60vh] bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-primary"></div>
					</div>

					<div className="min-h-screen relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
						<div className="max-w-md w-full space-y-8 text-center">
							<div className="mb-8">
								<h2 className="mt-6 text-6xl font-extrabold text-gray-900 dark:text-gray-100">
									404
								</h2>
								<p className="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-100">
									Page not found
								</p>
								<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
									Sorry, we couldn't find the page you're looking for.
								</p>
							</div>
							<div className="mt-8">
								<a
									href="/"
									className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
								>
									<svg
										className="mr-2 -ml-1 h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 12h18m-9-9l9 9-9 9"
										/>
									</svg>
									Go back home
								</a>
							</div>
						</div>
					</div>
				</section>
			</section>
		</>
	);
}

export default NotFound;
