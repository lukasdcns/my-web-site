import React from "react";

import { StyledMobileNav } from "@styles/components";
import { NavList } from "../nav_list";

export const MobileNav = ({ isOpened, setIsOpened }) => {
	return (
		<StyledMobileNav
			className={`mobile mobile-nav ${isOpened ? "open" : "close"}`}
		>
			<NavList setIsOpened={setIsOpened} isOpened={isOpened} />
		</StyledMobileNav>
	);
};
