import React from "react";

import Logo from "@components/Logo";

import { StyledHeader } from "@styles/components";

const Header = () => {
	return (
		<StyledHeader>
			<div className="header">
				<Logo className="header__link" />
				<h1 className="header__title">Lukas</h1>
			</div>
		</StyledHeader>
	);
};

export default Header;
