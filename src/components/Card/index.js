import React from "react";
import { StyledCard } from "@styles/components";

const Card = ({ title }) => (
	<StyledCard>
		<header className="card__header">
			<h2 className="card__header__title">{title}</h2>
		</header>
		<article className="card__article"></article>
	</StyledCard>
);

export default Card;
