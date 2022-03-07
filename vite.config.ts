import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import gql from "vite-plugin-simple-gql";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), gql()],
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
});
