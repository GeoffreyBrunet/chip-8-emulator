const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
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
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "chip8bundle.js",
    path: path.resolve(__dirname, "./public/js"),
  },
  plugins: [
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
