import React from "react";
import Header from "@components/Header";
import { StyledMain } from "@styles/StyledMain";
import { StaticImage } from "gatsby-plugin-image";
import Card from "../components/Card";

const IndexPage = () => {
	const devSince = () => {
		const currentDate = new Date();
		const startDate = new Date("2020-09-01");

		return currentDate.getFullYear() - startDate.getFullYear();
	};

	return (
		<>
			<Header />
			<StyledMain>
				<StaticImage
					className="main__picture"
					src="../images//me.jpg"
					alt="Photo de Lukas Descoins"
					width={400}
					height={400}
				/>
				<Card
					title={`Moi c'est Lukas, je suis développeur web depuis ${devSince()} ans.`}
				/>
			</StyledMain>
		</>
	);
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
