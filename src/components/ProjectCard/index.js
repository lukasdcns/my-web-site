import React from "react";
import { StyledProjectCard } from "@styles/components";
import { GatsbyImage } from "gatsby-plugin-image";

const ProjectCard = ({ title, slug_title, slug, icon_alt, icon, tag, job }) => {
	const projectCardIsHover = (e) => {
		e.target.closest("a").style.transform = "translate(0, -10px)";
		e.target.closest("a").style.filter =
			"drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1))";
	};

	const projectCardIsNotHover = (e) => {
		e.target.closest("a").style.transform = "translate(0, 0)";
		e.target.closest("a").style.filter =
			"drop-shadow(0 4px 12px rgba(0, 0, 0, 0))";
	};

	return (
		<StyledProjectCard
			href={slug}
			target="_blank"
			onMouseEnter={projectCardIsHover}
			onMouseLeave={projectCardIsNotHover}
		>
			<div className="project-card__left">
				<h3 className="project-card__left__title">{title}</h3>
				<div className="project-card__left__tag">
					<span>{tag}</span>
				</div>
			</div>

			<div className="project-card__right">
				<GatsbyImage
					className="project-card__right__icon"
					alt={icon_alt}
					image={icon}
				/>
			</div>
		</StyledProjectCard>
	);
};

export default ProjectCard;
