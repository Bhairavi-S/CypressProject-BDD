const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    pageLoadTimeout: 10000,
    baseUrl: 'https://rahulshettyacademy.com/seleniumPractise/#/',
    viewportHeight: 550,
    viewportWidth: 900,
    experimentalStudio: true

  },
});
