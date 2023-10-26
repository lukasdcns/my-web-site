import React from "react";
import Header from "@components/Header";
import { StyledMain } from "@styles/StyledMain";
import { StaticImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import Card from "../components/Card";
import ProjectCard from "../components/ProjectCard";

const IndexPage = () => {
	const devSince = () => {
		const currentDate = new Date();
		const startDate = new Date("2020-09-01");

		return currentDate.getFullYear() - startDate.getFullYear();
	};

	const projects = useStaticQuery(graphql`
		query getAllProjects {
			allMdx(filter: { frontmatter: { type: { eq: "project" } } }) {
				edges {
					node {
						frontmatter {
							title
							tag
							job
							slug
							slug_title
							icon {
								childImageSharp {
									gatsbyImageData
								}
							}
							icon_alt
						}
					}
				}
			}
		}
	`);

	return (
		<>
			<Header />
			<StyledMain>
				<section className="main__row-container">
					<StaticImage
						className="main__picture"
						src="../images//me.jpg"
						alt="Photo de Lukas Descoins"
						width={400}
						height={400}
					/>
					<Card
						title={`Moi c'est Lukas, développeur depuis ${devSince()} ans.`}
						content="Je suis très attaché à créer des solutions technologiques qui apportent une valeur positive et j'apprécie développer des expériences, intuitives, fluides et centrées sur l'utilisateur."
					/>
				</section>

				<section className="main__row-container projects" id="projects">
					{projects.allMdx.edges.map(({ node }, index) => (
						<ProjectCard
							key={index}
							slug={node.frontmatter.slug}
							slug_title={node.frontmatter.slug_title}
							icon={getImage(node.frontmatter.icon)}
							icon_alt={node.frontmatter.icon_alt}
							title={node.frontmatter.title}
							tag={node.frontmatter.tag}
							job={node.frontmatter.job}
						/>
					))}
				</section>
			</StyledMain>
		</>
	);
};

export default IndexPage;

export const Head = () => <title>Lukas Descoins - Développeur</title>;
