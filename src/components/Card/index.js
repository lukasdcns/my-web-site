import React from "react";
import { StyledCard } from "@styles/components";
import Button from "../Button";

const Card = ({ title, content = "", text_button = "" }) => {
	return (
		<StyledCard>
			<header className="card__header">
				<h2 className="card__header__title">{title}</h2>
			</header>
			{text_button.length === 0 ? (
				<article className="card__article">{content}</article>
			) : (
				<Button text={text_button} />
			)}
		</StyledCard>
	);
};

export default Card;
