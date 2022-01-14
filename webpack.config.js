const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "chip8bundle.js",
    path: path.resolve(__dirname, "./public/js"),
  },
  plugins: [
    new ESLintPlugin({
      extensions: ["ts"],
    }),
    {
      apply: (compiler) => {
        compiler.hooks.done.tap("DonePlugin", (stats) => {
          setTimeout(() => {
            process.exit(0);
          });
        });
      },
    },
  ],
};
