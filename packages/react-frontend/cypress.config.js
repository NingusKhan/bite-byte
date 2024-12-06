import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://purple-bush-034dc6c1e.5.azurestaticapps.net",
    defaultCommandTimeout: 20000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
