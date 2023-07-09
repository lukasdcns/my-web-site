import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { StyledLogo } from "@styles/components";

const Logo = ({ className }) => (
	<StyledLogo className={className}>
		<StaticImage src="../../images/blured-logo.jpg" alt="Logo de Lukas" />
	</StyledLogo>
);

export default Logo;
