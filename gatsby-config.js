/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `My Web Site`,
		siteUrl: `https://www.yourdomain.tld`,
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
				icon: `src/images/favicon_io/favicon.ico`,
				cache_busting_mode: "none",
			},
		},
	],
};
