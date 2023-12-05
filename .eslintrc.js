module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["react"],
  rules: {
    "indent": "off",
    "no-console": "off",
    "no-multiple-empty-lines": "off",
    "no-trailing-spaces": "off",
    "no-underscore-dangle": "off",
    "padded-blocks": "off",
    "react/function-component-definition": "off",
    "import/no-extraneous-dependencies": "off",
    "react/prop-types": "off",
    "import/prefer-default-export": "off",
    "jsx-a11y/label-has-associated-control": "off",
  },
};
