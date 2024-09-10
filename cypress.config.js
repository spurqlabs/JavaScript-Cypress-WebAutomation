const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    projectId: "CYFW01",
    downloadsFolder: "cypress/downloads",
    screenshotsFolder: "cypress/screenshots",
    video: true,
    screenshotOnRunFailure: true,
    chromeWebSecurity: false,
    trashAssetsBeforeRuns: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    execTimeout: 10000,
    pageLoadTimeout: 18000,
    defaultCommandTimeout: 10000,
    retries: {
      runMode: 1,
      openMode: 0
    },
  },
});
