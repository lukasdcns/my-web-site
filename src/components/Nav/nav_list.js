import { Link } from "gatsby";
import React from "react";

export const NavList = () => (
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
