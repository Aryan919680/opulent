import React from "react";
import RequirementAnalysis from "../assets/Requirement-Analysis.png";
import StrategicPlanning from "../assets/Strategic-Planning.png";
import CollaborativeIdeation from "../assets/Collaborative-Ideation.png";
import CreativeExecution from "../assets/Creative-Execution.png";
import ImplementationOptimization from "../assets/Implementation-optimization.webp";
import ClientEngagement from "../assets/Client-Engagement.jpg";
import MeasurableResults from "../assets/Measurable-Results.webp";
import ContinuousImprovement from "../assets/Continuous-Improvement.jpg";
import HowWeWorkCard from "./HowWeWorkCard";

export default function HowWeWork() {
	const cards = [
		{
			id: 1,
			imgSrc: RequirementAnalysis,
			title: "Requirement Analysis",
			description:
				"We kick off every project with a thorough consultation to understand your brand, goals, and target audience. By delving into your unique identity, we lay the foundation for a tailor-made strategy.",
		},
		{
			id: 2,
			imgSrc: StrategicPlanning,
			title: "Strategic Planning",
			description:
				"Our team of experts crafts a customized strategy that aligns with your objectives. This involves identifying key touchpoints in the last phase of the customer journey and developing creative approaches for maximum impact.",
		},
		{
			id: 3,
			imgSrc: CollaborativeIdeation,
			title: "Collaborative Ideation",
			description:
				"We believe in the power of collaboration. Our team collaborates internally and with you, ensuring that creative ideas are diverse, innovative, and resonate with your brand’s vision and values.",
		},
		{
			id: 4,
			imgSrc: CreativeExecution,
			title: "Creative Execution",
			description:
				"With a solid strategy in place, we bring concepts to life. From designing captivating visuals to implementing experiential elements, our creative execution is focused on making your brand stand out in those crucial last feet.",
		},
		{
			id: 5,
			imgSrc: ImplementationOptimization,
			title: "Implementation & Optimization",
			description:
				"We get seamlessly execute our strategies, constantly monitoring and analysing performance. Through data-driven insights, we optimize campaigns in real-time, ensuring that your brand remains agile and responsive to market dynamics.",
		},
		{
			id: 6,
			imgSrc: ClientEngagement,
			title: "Client Engagement",
			description:
				"Communication is key. We maintain open and transparent communication throughout the process, keeping you informed about progress, challenges, and results. Your feedback is not only valued but integral to refining our approach.",
		},
		{
			id: 7,
			imgSrc: MeasurableResults,
			title: "Measurable Results",
			description:
				"Our commitment to measurable impact ensures that the success of our strategies is quantifiable. We provide detailed analytics and reports, allowing you to gauge the effectiveness of our efforts and understand the tangible results.",
		},
		{
			id: 8,
			imgSrc: ContinuousImprovement,
			title: "Continuous Improvement",
			description:
				"The dynamic nature of the market demands constant evolution. We stay ahead by embracing a culture of continuous learning and improvement, adapting our strategies based on feedback, industry trends, and emerging technologies.",
		},
	];
	return (
		<section>
			<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
				<div className="mb-12 space-y-2 text-center">
					<p className="uppercase tracking-widest text-primary dark:text-white font-semibold underline underline-offset-4">
						How we work
					</p>
					<h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
						In our Approach to Innovative Solution
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{/* Cards */}
					{cards.map((card) => (
						<HowWeWorkCard
							key={card.id}
							imgSrc={card.imgSrc}
							title={card.title}
							description={card.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
