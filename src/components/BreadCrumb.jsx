import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
	const location = useLocation();
	const pathSegments = location.pathname
		.split("/")
		.filter((segment) => segment);

	const breadcrumbMap = {
		services: "Services",
		subItems: {
			"Strategic-Print-Procurement": "Strategic Print Procurement",
			"Retail-Branding": "Retail Branding",
			"store-Displays-POSM": "In Store Displays POSM",
			"Creative-Production": "Creative Production",
			"Retail-Activation": "Retail Activation",
			"Event-Marketing": "Event Marketing",
			"Corporate-Gifting": "Corporate Gifting",
			"Content-Development": "Content Development",
			"Retail-Store-Fabrication": "Retail Store Fabrication",
		},
	};

	const getDisplayName = (segment) => {
		if (segment === "services") return breadcrumbMap[segment];
		return breadcrumbMap.subItems[segment] || segment;
	};

	return (
		<div className="flex justify-center items-center h-10 pt-28 mb-12 capitalize">
			<ol className="flex items-center gap-1 text-sm text-gray-600">
				<li>
					<Link to="/" className="block transition hover:text-gray-700">
						<span className="sr-only">Home</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="size-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
							/>
						</svg>
					</Link>
				</li>

				{pathSegments.map((segment, index) => {
					const isLast = index === pathSegments.length - 1;
					const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
					const displayName = getDisplayName(segment);

					return (
						<React.Fragment key={path}>
							<li className="rtl:rotate-180">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="size-4"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clipRule="evenodd"
									/>
								</svg>
							</li>
							<li>
								{isLast ? (
									<span className="block text-gray-900 dark:text-white">
										{displayName}
									</span>
								) : (
									<Link
										to={path}
										className="block transition hover:text-gray-700"
									>
										{displayName}
									</Link>
								)}
							</li>
						</React.Fragment>
					);
				})}
			</ol>
		</div>
	);
};

export default BreadCrumb;
