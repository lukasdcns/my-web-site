import { Link } from "gatsby";
import React from "react";

export const NavList = ({ isOpened = null, setIsOpened = null }) => {
	const closeNav = () => {
		if (isOpened !== null && setIsOpened !== null) {
			setIsOpened(!isOpened);
		}
	};

	return (
		<ul className="nav-list">
			<li className="nav-list__item">
				<Link
					className="nav-list__item__link"
					to="/"
					onClick={closeNav}
				>
					Home
				</Link>
			</li>
			<li className="nav-list__item">
				<Link
					className="nav-list__item__link"
					to="/#projects"
					onClick={closeNav}
				>
					Projets
				</Link>
			</li>
			<li className="nav-list__item">
				<Link
					className="nav-list__item__link"
					to="/#contact"
					onClick={closeNav}
				>
					Contact
				</Link>
			</li>
		</ul>
	);
};
