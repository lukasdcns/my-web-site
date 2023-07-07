import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
	setHeadComponents([
		<link
			rel="preload"
			href="/fonts/OpenSauceOne-Regular.woff2"
			as="font"
			type="font/woff2"
			crossOrigin="anonymous"
			key="OpenSauceOneFont"
		/>,
		<link
			rel="preload"
			href="/fonts/OpenSauceOne-Medium.woff2"
			as="font"
			type="font/woff2"
			crossOrigin="anonymous"
			key="OpenSauceOneFont"
		/>,
		<link
			rel="preload"
			href="/fonts/OpenSauceOne-SemiBold.woff2"
			as="font"
			type="font/woff2"
			crossOrigin="anonymous"
			key="OpenSauceOneFont"
		/>,
	]);
};
