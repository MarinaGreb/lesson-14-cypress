const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://staging.lpitko.ru",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  projectId: "xtair1",
  env: {
    login: "sokovets@outlook.com",
    password: "123456",
  },
});
