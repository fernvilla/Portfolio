/** @type {import('next').NextConfig} */
const nextConfig = {
  siteUrl: process.env.SITE_URL || 'https://fernvillasenor.com',
  generateRobotsTxt: true // (optional)
};

module.exports = nextConfig;
