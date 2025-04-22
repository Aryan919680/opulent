import React from "react";
import ProjectsCard from "./components/ProjectsCard";
import bacardi from "./assets/Bacardi.png";
import bacardi1 from "./assets/Bacardi1.png";
import greyGoose from "./assets/Grey-Goose.png";
import kf from "./assets/KF.png";
import legacyBar from "./assets/Legacy-bar.png";
import paytm from "./assets/paytm.jpg";
import ultra from "./assets/Ultra.png";
import william from "./assets/William.png";
import { Link } from "react-router-dom";
import Header from "./components/Header";

const Project = () => {
	const details = [
		{
			id: 1,
			projectImg: bacardi,
			projectHeading: "Project Name",
			projectDesc:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
		},
		{
			id: 2,
			projectImg: bacardi1,
			projectHeading: "Project Name",
			projectDesc:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
		},
		{
			id: 3,
			projectImg: greyGoose,
			projectHeading: "Project Name",
			projectDesc:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
		},
		{
			id: 4,
			projectImg: kf,
			projectHeading: "Project Name",
			projectDesc:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
		},
		{
			id: 5,
			projectImg: legacyBar,
			projectHeading: "Project Name",
			projectDesc:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
		},
		{
			id: 6,
			projectImg: paytm,
			projectHeading: "Project Name",
			projectDesc:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
		},
		{
			id: 7,
			projectImg: william,
			projectHeading: "Project Name",
			projectDesc:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
		},
		{
			id: 8,
			projectImg: ultra,
			projectHeading: "Project Name",
			projectDesc:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
		},
	];
	return (
		<section className="space-y-40 mb-40">
			<Header pageTitle="Project" />
			<div className="flex flex-wrap gap-8 justify-evenly items-center">
				{details.map((item) => {
					return (
						<ProjectsCard
							key={item.id}
							projectImg={item.projectImg}
							projectHeading={item.projectHeading}
							projectDesc={item.projectDesc}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Project;
