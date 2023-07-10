import React from "react";

import { StyledNav } from "@styles/components";
import { NavList } from "@components/Nav";

export const DesktopNav = () => {
	return (
		<StyledNav className="nav desktop">
			<NavList />
		</StyledNav>
	);
};
