module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    semi: ["error", "always"],
    quotes: [0, "double"],
    "comma-dangle": "off",
    "space-before-function-paren": ["error", { anonymous: "always", named: "never", asyncArrow: "always" }],
  }
};
