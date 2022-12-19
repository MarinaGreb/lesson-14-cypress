const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://santa-secret.ru",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  projectId: "xtair1",
  env: {
    login: "sokovets+prod@outlook.com",
    password: "prod123",
  },
});