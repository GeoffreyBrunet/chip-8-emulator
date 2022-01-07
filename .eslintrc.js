module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    semi: "off",
    "@typescript-eslint/semi": ["warn"],
  },
  ignorePatterns: ["dist/*"],
};
