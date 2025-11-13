// @ts-ignore - eslint-config-next does not ship TypeScript typings
import next from "eslint-config-next";
import type { Linter } from "eslint";

const config: Linter.Config[] = [
  ...next,
  {
    ignores: ["node_modules/**", ".next/**", "dist/**", "out/**"],
  },
];

export default config;
