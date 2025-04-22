import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
	const [navOpen, setNavOpen] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [isServicesOpen, setIsServicesOpen] = useState(false);

	const navRef = useRef(null);
	const hamburgerRef = useRef(null);

	useEffect(() => {
		const darkFromLocalStorage = localStorage.getItem("darkMode");
		const systemPrefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;

		if (darkFromLocalStorage === "true") {
			setIsDarkMode(true);
			document.documentElement.classList.add("dark");
		} else if (!darkFromLocalStorage && systemPrefersDark) {
			setIsDarkMode(true);
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, []);

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
		localStorage.setItem("darkMode", isDarkMode);
	}, [isDarkMode]);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleChange = (e) => {
			const darkFromLocalStorage = localStorage.getItem("darkMode");
			if (!darkFromLocalStorage) {
				setIsDarkMode(e.matches);
			}
		};

		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	const handleThemeToggle = () => {
		setIsDarkMode((prev) => !prev);
	};

	const handleNavToggle = () => {
		setNavOpen((prev) => !prev);
	};

	useEffect(() => {
		const handleOutsideClick = (e) => {
			if (!navRef.current || !hamburgerRef.current) return;

			if (
				navOpen &&
				!navRef.current.contains(e.target) &&
				!hamburgerRef.current.contains(e.target)
			) {
				setNavOpen(false);
			}
		};

		document.addEventListener("click", handleOutsideClick);
		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	}, [navOpen]);

	return (
		<header className="sticky top-0 z-50">
			<nav className="z-10 w-full absolute backdrop-filter backdrop-blur-sm bg-opacity-70">
				<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
					<div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
						<div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
							<NavLink
								to="/"
								aria-label="logo"
								className="flex space-x-2 items-center"
							>
								<div aria-hidden="true" className="flex space-x-1">
									<div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-white" />
									<div className="h-6 w-2 bg-primary" />
								</div>
								<span className="text-2xl font-bold text-gray-900 dark:text-white">
								OPULENT
								</span>
							</NavLink>

							<div className="relative flex items-center lg:hidden max-h-10">
								<label
									role="button"
									aria-label="hamburger"
									className="relative p-6 -mr-6"
									onClick={handleNavToggle}
									ref={hamburgerRef}
								>
									<div
										className={`m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300 ${
											navOpen ? "rotate-45 translate-y-[6px]" : ""
										}`}
									/>
									<div
										className={`m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300 ${
											navOpen ? "-rotate-45 -translate-y-[4px]" : ""
										}`}
									/>
								</label>
							</div>
						</div>

						<div
							className={`fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 lg:hidden dark:bg-gray-900/70 ${
								navOpen ? "scale-y-100 origin-top" : ""
							}`}
						></div>

						<div
							ref={navRef}
							className={`
                flex-col z-20 flex-wrap gap-6 p-8
                rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10
                justify-end w-full
                opacity-0 pointer-events-none translate-y-1
                absolute top-full left-0
                transition-all duration-300 scale-95 origin-top lg:relative lg:scale-100 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:opacity-100 lg:pointer-events-auto lg:border-none 
                dark:shadow-none dark:bg-gray-800 dark:border-gray-700
                ${navOpen ? "scale-100 opacity-100 pointer-events-auto" : ""}
              `}
						>
							<div className="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
								<ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0 uppercase">
									<li>
										<NavLink
											to="/about"
											className="block md:px-4 transition hover:text-primary"
										>
											<span>About Us</span>
										</NavLink>
									</li>
									<li className="relative group">
										<Link
											to="/services"
											className="flex items-center md:px-4 transition hover:text-primary w-full"
											onClick={(e) => {
												if (window.innerWidth < 1024) {
													e.preventDefault();
													setIsServicesOpen(!isServicesOpen);
												}
											}}
										>
											<span>Services</span>
											<svg
												className="w-4 h-4 ml-1"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M19 9l-7 7-7-7"
												/>
											</svg>
										</Link>
										<div className="h-8 w-full absolute top-full left-0 lg:block hidden"></div>
										<div
											className={`lg:absolute lg:left-0 lg:top-8 lg:w-64 bg-white dark:bg-gray-800 lg:rounded-md lg:shadow-lg py-2 z-50 lg:opacity-0 lg:pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-150 ease-in-out pl-4 lg:pl-0 ${
												!isServicesOpen &&
												!window.matchMedia("(min-width: 1024px)").matches
													? "hidden"
													: ""
											}`}
										>
											<ul>
												<li>
													<Link
														to="/services/Strategic-Print-Procurement"
														className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
													>
														Strategic Print Procurement
													</Link>
												</li>
												<li>
													<Link
														to="/services/Retail-Branding"
														className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
													>
														Retail Branding
													</Link>
												</li>
												<li>
													<Link
														to="/services/store-Displays-POSM"
														className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
													>
														In Store Displays POSM
													</Link>
												</li>
												<li>
													<Link
														to="/services/Creative-Production"
														className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
													>
														Creative Production
													</Link>
												</li>
												<li>
													<Link
														to="/services/Retail-Activation"
														className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
													>
														Retail Activation
													</Link>
												</li>
												<li>
													<Link
														to="/services/Event-Marketing"
														className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
													>
														Event Marketing
													</Link>
												</li>
												<li>
													<Link
														to="/services/Corporate-Gifting"
														className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
													>
														Corporate Gifting
													</Link>
												</li>
												<li>
													<Link
														to="/services/Content-Development"
														className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
													>
														Content Development
													</Link>
												</li>
												<li>
													<Link
														to="/services/Retail-Store-Fabrication"
														className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
													>
														Retail Store Fabrication
													</Link>
												</li>
											</ul>
										</div>
									</li>
									<li>
										<NavLink
											to="/project"
											className="block md:px-4 transition hover:text-primary"
										>
											<span>Projects</span>
										</NavLink>
									</li>
									<li>
										<NavLink
											to="/contact"
											className="block md:px-4 transition hover:text-primary"
										>
											<span>Contact</span>
										</NavLink>
									</li>
								</ul>
							</div>

							<div className="mt-12 lg:mt-0 flex items-center gap-4">
								<Link
									to="/get-in-touch"
									className="relative flex h-9 w-full items-center justify-center px-4
                  before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300
                  hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
								>
									<span className="relative text-sm font-semibold text-white">
										Get in touch
									</span>
								</Link>

								<button
									onClick={handleThemeToggle}
									className="rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-gray-600 dark:bg-yellow-100 bg-gray-800"
								>
									<svg
										className={`w-5 h-5 ${
											isDarkMode ? "" : "hidden"
										} text-yellow-500`}
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
										/>
									</svg>
									<svg
										className={`w-5 h-5 ${
											isDarkMode ? "hidden" : ""
										} text-gray-300`}
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
