import next from "eslint-config-next";

const config = [
  ...next,
  {
    ignores: ["node_modules/**", ".next/**", "dist/**", "out/**"],
  },
];

export default config;
