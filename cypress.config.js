const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'b7wu57',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
