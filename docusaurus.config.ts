import 'dotenv/config';

import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import docusaurusLunrSearch from 'docusaurus-lunr-search';

const defaults = {
	githubUrl:
		'https://github.com/aoneahsan/internal-zaions-docz-rules-for-coding-designing-other-projects-record-and-more',
	title: 'Zaions Docz',
	tagline: 'Zaions Company Internal Documentation',
	url: 'https://docz.zaions.com',
};

const config: Config = {
	title: defaults.title,
	tagline: defaults.tagline,
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: defaults.url,
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'aoneahsan', // Usually your GitHub org/user name.
	projectName:
		'internal-zaions-docz-rules-for-coding-designing-other-projects-record-and-more', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'fr'],
		localeConfigs: {
			en: {
				htmlLang: 'en-GB',
			},
			// You can omit a locale (e.g. fr) if you don't need to override the defaults
			fr: {
				direction: 'rtl',
			},
		},
	},

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: defaults.githubUrl,
					breadcrumbs: true,
					admonitions: true,
					disableVersioning: false,
					versions: {
						current: {
							label: 'v1.0.0',
						},
					},
					includeCurrentVersion: true,
					lastVersion: 'current',
					showLastUpdateAuthor: true,
					showLastUpdateTime: true,
					sidebarCollapsed: false,
					sidebarCollapsible: true,
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: defaults.githubUrl,
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: 'img/docusaurus-social-card.jpg',
		navbar: {
			title: defaults.title,
			logo: {
				alt: 'Zaions Docz Logo',
				src: 'img/logo.svg',
			},
			items: [
				{
					type: 'docSidebar',
					sidebarId: 'tutorialSidebar',
					position: 'left',
					label: 'Tutorial',
				},
				{ to: '/blog', label: 'Blog', position: 'left' },
				{
					href: defaults.githubUrl,
					label: 'GitHub',
					position: 'right',
				},
				{
					type: 'docsVersionDropdown',
				},
				{
          type: 'localeDropdown',
          position: 'left',
        },
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Tutorial',
							to: '/docs/intro',
						},
					],
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Youtube',
							href: 'https://zaions.com/youtube',
						},
						{
							label: 'Twitter',
							href: 'https://zaions.com/twitter',
						},
						{
							label: 'Linkedin',
							href: 'https://zaions.com/linkedin',
						},
					],
				},
				{
					title: 'More',
					items: [
						{
							label: 'Blog',
							to: '/blog',
						},
						{
							label: 'GitHub',
							href: defaults.githubUrl,
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Zaions, Inc. Built with &#9829;.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
		// algolia: {
		// 	apiKey: process.env.ALGOLIA_SEARCH_ONLY_API_KEY,
		// 	indexName: process.env.ALGOLIA_INDEX_NAME,

		// 	// Optional: see doc section bellow
		// 	contextualSearch: true,
		// 	appId: process.env.ALGOLIA_APP_ID,
		// 	externalUrlRegex: 'https://docz.zaions.com',
		// 	replaceSearchResultPathname: {
		// 		from: 'https://docz.zaions.com',
		// 		to: 'https://docz.zaions.com',
		// 	},
		// 	searchPagePath: '/search',
		// 	searchParameters: {
		// 		facetFilters: ['language:en'],
		// 	},
		// },
		docs: {
			versionPersistence: 'localStorage',
			sidebar: {
				autoCollapseCategories: true, // user will only be able to open one category in sidebar at a time (stay focused)
				hideable: true, // sidebar will have a hide button
			},
		},
	} satisfies Preset.ThemeConfig,
	plugins: [
		// Official Plugins Below
		[
			'@docusaurus/plugin-pwa',
			{
				debug: true,
				offlineModeActivationStrategies: [
					'appInstalled',
					'standalone',
					'queryString',
				],
				pwaHead: [
					{
						tagName: 'link',
						rel: 'icon',
						href: '/img/docusaurus.png',
					},
					{
						tagName: 'link',
						rel: 'manifest',
						href: '/manifest.json', // your PWA manifest
					},
					{
						tagName: 'meta',
						name: 'theme-color',
						content: 'rgb(37, 194, 160)',
					},
				],
			},
		],

		// Community Plugins Below

		// Tried this but did not worked, the search was disabled, so tried the next one and worked
		// [
		// 	require.resolve('docusaurus-lunr-search'),
		// 	{
		// 		languages: ['en'], // language codes

		// 	},
		// ],

		// Offline Search - Community Plugin
		[
			require.resolve('@cmfcmf/docusaurus-search-local'),
			{
				// whether to index docs pages
				indexDocs: true,

				// Whether to also index the titles of the parent categories in the sidebar of a doc page.
				// 0 disables this feature.
				// 1 indexes the direct parent category in the sidebar of a doc page
				// 2 indexes up to two nested parent categories of a doc page
				// 3...
				//
				// Do _not_ use Infinity, the value must be a JSON-serializable integer.
				indexDocSidebarParentCategories: 0,

				// whether to index blog pages
				indexBlog: true,

				// whether to index static pages
				// /404.html is never indexed
				indexPages: true,

				// language of your documentation, see next section
				language: 'en',

				// setting this to "none" will prevent the default CSS to be included. The default CSS
				// comes from autocomplete-theme-classic, which you can read more about here:
				// https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
				// When you want to overwrite CSS variables defined by the default theme, make sure to suffix your
				// overwrites with `!important`, because they might otherwise not be applied as expected. See the
				// following comment for more information: https://github.com/cmfcmf/docusaurus-search-local/issues/107#issuecomment-1119831938.
				style: undefined,

				// The maximum number of search results shown to the user. This does _not_ affect performance of
				// searches, but simply does not display additional search results that have been found.
				maxSearchResults: 8,

				// lunr.js-specific settings
				lunr: {
					// When indexing your documents, their content is split into "tokens".
					// Text entered into the search box is also tokenized.
					// This setting configures the separator used to determine where to split the text into tokens.
					// By default, it splits the text at whitespace and dashes.
					//
					// Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
					tokenizerSeparator: /[\s\-]+/,
					// https://lunrjs.com/guides/customising.html#similarity-tuning
					//
					// This parameter controls the importance given to the length of a document and its fields. This
					// value must be between 0 and 1, and by default it has a value of 0.75. Reducing this value
					// reduces the effect of different length documents on a term’s importance to that document.
					b: 0.75,
					// This controls how quickly the boost given by a common word reaches saturation. Increasing it
					// will slow down the rate of saturation and lower values result in quicker saturation. The
					// default value is 1.2. If the collection of documents being indexed have high occurrences
					// of words that are not covered by a stop word filter, these words can quickly dominate any
					// similarity calculation. In these cases, this value can be reduced to get more balanced results.
					k1: 1.2,
					// By default, we rank pages where the search term appears in the title higher than pages where
					// the search term appears in just the text. This is done by "boosting" title matches with a
					// higher value than content matches. The concrete boosting behavior can be controlled by changing
					// the following settings.
					titleBoost: 5,
					contentBoost: 1,
					tagsBoost: 3,
					parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
				},
			},
		],
	],
};

export default config;
