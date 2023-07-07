import React from "react";
import { Link } from "gatsby";

import { StyledMobileNav } from "@styles/components";

const NavList = () => (
	<ul className="nav-list">
		<li className="nav-list__item">
			<Link className="nav-list__item__link" to="/">
				Home
			</Link>
		</li>
		<li className="nav-list__item">
			<Link className="nav-list__item__link" to="/#projects">
				Projets
			</Link>
		</li>
		<li className="nav-list__item">
			<Link className="nav-list__item__link" to="/#contact">
				Contact
			</Link>
		</li>
	</ul>
);

const Nav = ({ isOpened }) => {
	return (
		<StyledMobileNav
			className={`mobile mobile-nav ${isOpened ? "open" : "close"}`}
		>
			<NavList />
		</StyledMobileNav>
	);
};

export default Nav;
