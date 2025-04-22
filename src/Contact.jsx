import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";

const Contact = () => {
	return (
		<section className="space-y-40 mb-40">
			<Header pageTitle="Contact us" />
			<section className="text-gray-700 body-font relative min-h-screen">
				<div className="absolute inset-0 bg-gray-300 top-0">
					<iframe
						width="100%"
						height="100%"
						frameborder="0"
						marginheight="0"
						marginwidth="0"
						title="map"
						scrolling="no"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224568.36079105217!2d76.82493680191332!3d28.42285832356013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1736181979475!5m2!1sen!2sin"
						style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
					></iframe>
				</div>
				<div className="container px-5 py-24 mx-auto flex">
					<div className="sm:w-fit  bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 h-fit">
						<h2 className="text-gray-900 text-xl font-medium title-font mb-8 uppercase text-center">
							Send a message
						</h2>

						<input
							className="bg-white rounded border border-gray-400 focus:outline-none focus:border-primary text-base px-4 py-2 mb-4"
							placeholder="Email"
							type="email"
						/>
						<textarea
							className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-primary text-base px-4 py-2 mb-4 resize-none"
							placeholder="Message"
						></textarea>
						<button className="text-white bg-primary/80 border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded text-lg">
							Submit
						</button>
						<h2 className="text-gray-900 text-lg font-medium title-font mt-8">
							Get in Touch
						</h2>
						<div className="flex sm:justify-center items-start gap-4 sm:gap-12 flex-wrap">
							<div>
								<h5 className="text-gray-900 text-base font-medium title-font mt-2">
									Address
								</h5>
								<p className="leading-relaxed mb-2 text-gray-600">
									P-9, Basement, South City - I,
									<br /> Near National Law College, <br />
									Sector - 40, Gurugram,
									<br /> Haryana 122002
								</p>
							</div>
							<div>
								<h5 className="text-gray-900 text-base font-medium title-font mt-2">
									Contact
								</h5>
								<a
									href="mailto:info@last3feet.in"
									className="leading-relaxed text-gray-600 block"
								>
									info@Opulent.in
								</a>
								<a
									href="tel:+918950197248"
									className="leading-relaxed block text-gray-600"
								>
									(+91) 895 019 7248
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Contact;
