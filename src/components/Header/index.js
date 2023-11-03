import React, { useEffect, useState } from "react";

import Logo from "@components/Logo";

import { StyledHeader } from "@styles/components";
import { DesktopNav, MobileNav, MobileNavButton } from "../Nav";

const Header = () => {
	const [isOpened, setIsOpened] = useState(false);

	useEffect(() => {
		if (isOpened) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	});

	return (
		<StyledHeader>
			<div className="header">
				<Logo className="header__link" />
				<h1 className="header__title">Lukas</h1>
			</div>
			<MobileNavButton navIsOpened={isOpened} setIsOpened={setIsOpened} />
			<MobileNav isOpened={isOpened} setIsOpened={setIsOpened} />
			<DesktopNav />
		</StyledHeader>
	);
};

export default Header;
