const { FlatCompat } = require("@eslint/eslintrc");
const path = require("path");

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = {
  extends: [
    ...compat.extends("next/core-web-vitals", "next/typescript"), // Next.js rules
    "plugin:tailwindcss/recommended", // Adds Tailwind CSS linting rules
  ],
  
  rules: {
    // You can add or adjust specific rules here if necessary
  },
};
