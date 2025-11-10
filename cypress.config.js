const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: "tests/cypress/e2e/**/*.cy.js",
    baseUrl: "http://localhost:3000"
  }
});
