import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "5imom0et",
  dataset: "production",
  title: "last ecomm before caranza",
  apiVersion: "2023-15-09",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
