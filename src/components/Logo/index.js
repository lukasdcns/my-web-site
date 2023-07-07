import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { StyledLogo } from "@styles/components";

const Logo = ({ className }) => (
	<StyledLogo className={className}>
		<StaticImage src="../../images/icon.jpg" alt="Photo de Lukas" />
	</StyledLogo>
);

export default Logo;
