import React from "react";
import { StyledMain } from "@styles/components";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import Card from "../components/Card";
import Contact from "../components/Contact";
import Folder from "../components/Folder";
import Button from "../components/Button";

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
			<StyledMain>
				<StaticImage
					className="main__picture"
					src="../images/me.jpg"
					alt="Photo de Lukas Descoins"
					width={400}
					height={400}
				/>

				<Card
					title={`Moi c'est Lukas, développeur depuis ${devSince()} ans.`}
					content="Je suis très attaché à créer des solutions technologiques qui apportent une valeur positive et j'apprécie développer des expériences, intuitives, fluides et centrées sur l'utilisateur."
				/>

				<Contact />

				<div className="double-folder">
					<Folder name={"Pro"} icons="4" />
					<Folder name={"Freelance"} icons="4" />
				</div>

				<Folder name={"Perso"} icons="10" />

				<Card
					title={
						"Vous pensez que l’on pourrait travailler ensemble ?"
					}
					text_button="Alors contactez moi !"
				/>
			</StyledMain>
		</>
	);
};

export default IndexPage;

export const Head = () => <title>Lukas Descoins - Développeur</title>;
