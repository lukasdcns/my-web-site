import React from "react";
import { StyledCard } from "@styles/components";
import Contact from "../Contact";

const Card = ({ title, content }) => (
	<StyledCard>
		<header className="card__header">
			<h2 className="card__header__title">{title}</h2>
		</header>
		<article className="card__article">{content}</article>
		<Contact />
	</StyledCard>
);

export default Card;
