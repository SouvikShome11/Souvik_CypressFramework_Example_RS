const { defineConfig } = require('cypress');
const {
  addCucumberPreprocessorPlugin,
} = require('@badeball/cypress-cucumber-preprocessor');
const {
  preprocessor,
} = require('@badeball/cypress-cucumber-preprocessor/browserify');

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on('file:preprocessor', preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
module.exports = defineConfig({
  projectId: '6u1iuf',
  video: false,
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 60000,
  requestTimeout: 60000,

  env: {
    url: 'https://rahulshettyacademy.com',
  },
  retries: {
    runMode: 0,
    openMode: 0,
  },

  e2e: {
    //specPattern: 'cypress/integration/**/**.cy.js',
    specPattern: [
      'cypress/integration/BDD/**/**.feature',
      'cypress/integration/**/**.cy.js',
      'cypress/integration/**/**/**.cy.js',
    ],
    setupNodeEvents,
  },
});
