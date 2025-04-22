import React from "react";

const ProjectsCard = ({ projectImg, projectHeading, projectDesc }) => {
	return (
		<>
			<article className="flex bg-white dark:bg-transparent transition hover:shadow-xl hover:shadow-gray-500/10 sm:w-2/5 w-full">
				<div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
					<time
						datetime="2022-10-10"
						className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
					>
						<span>2025</span>
						<span className="w-px flex-1 bg-gray-900/10 dark:bg-gray-500"></span>
						<span>Jan 3</span>
					</time>
				</div>

				<div className="hidden sm:block sm:basis-56">
					<img
						alt=""
						src={projectImg}
						className="aspect-square h-full w-full object-cover"
					/>
				</div>

				<div className="flex flex-1 flex-col justify-between">
					<div className="border-s border-gray-900/10 dark:border-white p-4 sm:border-l-transparent sm:p-6">
						<a href="#">
							<h3 className="font-bold uppercase text-gray-900 dark:text-white">
								{projectHeading}
							</h3>
						</a>

						<p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-white">
							{projectDesc}
						</p>
					</div>

					<div className="sm:flex sm:items-end sm:justify-end">
						<a
							href="#"
							className="block bg-primary/80 px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-primary"
						>
							Read More
						</a>
					</div>
				</div>
			</article>
		</>
	);
};

export default ProjectsCard;
