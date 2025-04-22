import React from "react";
import About from "./components/About";
import { Link } from "react-router-dom";
import HowWeWork from "./components/HowWeWork";
import WhyChooseUs from "./components/WhyChooseUs";
import Header from "./components/Header";

const AboutUs = () => {
	return (
		<section className="space-y-40 mb-40">
			<Header pageTitle="About us" />
			<About />
			<HowWeWork />
			<WhyChooseUs />
		</section>
	);
};

export default AboutUs;
