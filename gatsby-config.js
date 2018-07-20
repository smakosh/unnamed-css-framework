const config = require('./data/Config');

module.exports = {
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		'gatsby-plugin-react-next',
		{
			resolve: 'gatsby-plugin-canonical-urls',
			options: {
				siteUrl: config.siteURL,
			},
		},
		'gatsby-plugin-catch-links',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-prismjs',
						options: {
							classPrefix: 'language-',
							inlineCodeMarker: null,
							aliases: {},
						},
					},
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 1000,
						},
					},
				],
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'posts',
				path: `${__dirname}/content/`,
			},
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: config.googleAnalyticsID,
			}
		},
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: config.themeColor,
				showSpinner: false,
			}
		},
		'gatsby-transformer-json',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: config.siteName,
				short_name: config.siteName,
				start_url: '/',
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: 'minimal-ui',
				icons: [
					{
						src: '/favicon/logo-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/favicon/logo-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
				],
			},
		},
		'gatsby-plugin-offline',
	],
};
