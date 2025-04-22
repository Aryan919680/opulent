import React from "react";
import { Link } from "react-router-dom";
import Services from "./components/Services";
import Stats from "./components/Stats";
import HowWeWork from "./components/HowWeWork";
import Header from "./components/Header";

const ServicesPage = () => {
	return (
		<section className="space-y-40 mb-40">
			<Header pageTitle="Services" />
			<Services />
			<Stats />
			<HowWeWork />
		</section>
	);
};

export default ServicesPage;
