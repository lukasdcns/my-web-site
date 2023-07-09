import React from "react";
import { StyledContactIcon } from "@styles/components";
import { GatsbyImage } from "gatsby-plugin-image";

const Icon = ({ slug, slug_title, icon, icon_alt }) => (
	<StyledContactIcon>
		<a
			className="contact-icon__link"
			href={slug}
			target="_blank"
			title={slug_title}
			rel="noopener noreferrer"
		>
			<GatsbyImage
				className="contact-icon__icon"
				alt={icon_alt}
				image={icon}
			/>
		</a>
	</StyledContactIcon>
);

export default Icon;
