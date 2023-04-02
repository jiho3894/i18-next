/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "ko",
    locales: ["en", "ko"],
    localePath: "./public/locales",
  },
}

module.exports = nextConfig
