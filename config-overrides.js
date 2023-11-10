const path = require("path");

module.exports = {
  webpack: function (config, env) {
    return {
      ...config,
      resolve: {
        alias: {
          "@components": path.resolve(__dirname, "src/components/"),
          "@styles": path.resolve(__dirname, "src/assets/css"),
          "@pages": path.resolve(__dirname, "src/pages/"),
          "@redux": path.resolve(__dirname, "src/redux/"),
          "@assets": path.resolve(__dirname, "src/assets/"),
          "@utils": path.resolve(__dirname, "src/utils/"),
          "@hooks": path.resolve(__dirname, "src/hooks/"),
          "@layouts": path.resolve(__dirname, "src/layouts/"),
          "@route": path.resolve(__dirname, "src/routes/"),
          "@variables": path.resolve(__dirname, "src/variables"),
          "@views": path.resolve(__dirname, "src/views"),
        },
        extensions: [
          ".js",
          ".jsx",
          ".json",
          ".scss",
          ".svg",
          ".png",
          ".jpeg",
          ".jpg",
        ],
        fallback: {
          fs: false,
          path: false,
        },
      },
    };
  },
};
