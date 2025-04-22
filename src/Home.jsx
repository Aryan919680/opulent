import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Stats from "./components/Stats";
import HowWeWork from "./components/HowWeWork";

const Home = () => {
	return (
		<>
			<main className="space-y-40 mb-40">
				<Hero />
				<About />
				<Services />
				<Stats />
				<HowWeWork />
			</main>
		</>
	);
};

export default Home;
