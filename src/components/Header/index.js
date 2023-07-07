import React, { useState } from "react";

import MobileNav from "@components/MobileNav";
import { MobileNavButton } from "@components/MobileNav/mobile_button";
import Logo from "@components/Logo";

import { StyledHeader } from "@styles/components";

const Header = () => {
	const [isOpened, setIsOpened] = useState(false);

	return (
		<StyledHeader>
			<div className="header">
				<Logo className="header__link" />
				<h1 className="header__title">Lukas</h1>
			</div>
			<MobileNavButton navIsOpened={isOpened} setIsOpened={setIsOpened} />
			<MobileNav isOpened={isOpened} />
		</StyledHeader>
	);
};

export default Header;
