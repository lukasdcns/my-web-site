/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `Lukas Descoins - Développeur`,
		siteUrl: `https://lukasdcns.tech`,
	},
	plugins: [
		"gatsby-plugin-emotion",
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"gatsby-plugin-mdx",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: `data`,
				path: `${__dirname}/data`,
			},
		},
		{
			resolve: "gatsby-plugin-alias-imports",
			options: {
				alias: {
					"@src": "src",
					"@components": "src/components",
					"@pages": "src/pages",
					"@styles": "src/styles",
					"@images": "src/images",
				},
				extensions: ["js"],
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Lukas Descoins - Développeur`,
				short_name: `Lukasdcns`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#ffffff`,
				display: `fullscreen`,
				icon: `src/images/favicon.svg`,
				cache_busting_mode: "none",
			},
		},
		{
			resolve: `gatsby-omni-font-loader`,
			options: {
				enableListener: true,
				preconnect: [
					`https://fonts.googleapis.com`,
					`https://fonts.gstatic.com`,
				],
				web: [
					{
						name: `Montserrat`,
						file: `https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap`,
					},
				],
			},
		},
	],
};
