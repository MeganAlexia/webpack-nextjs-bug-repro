const { TestPlugin } = require("./webpack/plugin/test-plugin");
const { getStringsLoader } = require("./webpack/loader/test-loader");
const path = require("path");

const PATH_ROOT = path.resolve(__dirname);

/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  distDir: "build",
  webpack: (config, options) => {
    if (options.isServer) {
      config.module.rules.push({
        test: /\.(mjs|js|ts|tsx)$/,
        // Include local files and certain scoped packages from node_modules
        exclude: /node_modules\*/,
        use: [options.defaultLoaders.babel, getStringsLoader()],
        resolve: {
          fullySpecified: false, // disable the behaviour
        },
      });

      config.plugins.push(
        new TestPlugin({
          outputPath: path.join(PATH_ROOT, "build/testing"),
        })
      );
    }

    return config;
  },
};
