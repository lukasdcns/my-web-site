import React from "react";
import { StyledContact } from "@styles/components";
import { useStaticQuery, graphql } from "gatsby";
import Icon from "@components/Contact/icon";
import { getImage } from "gatsby-plugin-image";

const Contact = () => {
	const data = useStaticQuery(graphql`
		query getAllContactIcons {
			allMdx {
				nodes {
					frontmatter {
						title
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
	`);

	return (
		<StyledContact>
			<a
				className="contact-email__link"
				href="mailto:contact@lukasdcns.tech"
				target="_blank"
				rel="noopener noreferrer"
			>
				<button className="contact-email__link__button">
					<h2 className="contact-email__link__button__title">
						Contactez-moi
					</h2>
				</button>
			</a>

			<section className="contact-icons">
				{data.allMdx.nodes.map(({ frontmatter }, index) => (
					<Icon
						key={index}
						slug={frontmatter.slug}
						slug_title={frontmatter.slug_title}
						icon={getImage(frontmatter.icon)}
						icon_alt={frontmatter.icon_alt}
					/>
				))}
			</section>
		</StyledContact>
	);
};

export default Contact;
