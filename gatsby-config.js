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
		"gatsby-plugin-sharp",
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
	],
};
