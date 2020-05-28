require("dotenv").config();
const path = require("path");

module.exports = {
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    SENTRY_DNS_KEY: process.env.SENTRY_DNS_KEY,
  },
  poweredByHeader: false,
  webpack: (config, options) => {
    return config;
  },
  sassOptions: {
    data: '@import "common.scss";',
    includePaths: [path.join(__dirname, "assets/styles")],
  },
};
