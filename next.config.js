/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["https://oaidalleapiprodscus.blob.core.windows.net/"],
	},
	compiler: {
		styledComponents: true,
	},
};

module.exports = nextConfig;
