// 패키지 설치
const fs = require('fs');
const globby = require('globby');
const prettier = require('prettier');
const fetch = require('node-fetch');

const getDate = new Date().toISOString();
const DOMAIN = 'https://kalog.vercel.app';
const fetchUrl = 'http://localhost:3075/post/getList';

const formatted = (sitemap) => prettier.format(sitemap, { parser: 'html' });

(async () => {
	const pages = await globby(['../pages/*.tsx', '../pages/search/*.tsx', '!../pages/_*.tsx']);

	const fetchPosts = await fetch(fetchUrl, { method: 'POST' })
		.then((res) => res.json())
		.catch((err) => console.log(err));

	console.log(fetchPosts);

	fetchPosts.forEach((post) => pages.push(`post/${post.id}`));

	const pagesSitemap = `
		${pages
			.map((page) => {
				const path = page
					.replace('../pages/', '')
					.replace('.tsx', '')
					.replace(/\/index/g, '');
				const routePath = path === 'index' ? '' : path;
				return `
				<url>
					<loc>${DOMAIN}/${routePath}</loc>
					<lastmod>${getDate}</lastmod>
				</url>
				`;
			})
			.join('')}
		`;

	const generatedSitemap = `
		<?xml version="1.0" encoding="UTF-8"?>
			<urlset
			xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
			xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
			${pagesSitemap}
			</urlset>`;

	const formattedSitemap = [formatted(generatedSitemap)];

	fs.writeFileSync('../public/sitemap-common.xml', formattedSitemap.toString(), 'utf8');
})();
