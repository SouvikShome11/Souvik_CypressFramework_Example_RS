const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: './cypress/reports/json_report',
  reportPath: 'cypress/reports/html_report/cucumber-htmlreport.html',
  launchReport: 'true',
  theme: 'hierarchy',
  metadata: {
    browser: {
      name: 'chrome',
      version: '100',
    },
    device: 'Local test machine',
    platform: {
      name: 'ubuntu',
      version: '16.04',
    },
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'Souvik Cypress Framework' },
      { label: 'Release', value: '1.2.3' },
      { label: 'Cycle', value: 'B11221.34321' },
      { label: 'Execution Start Time', value: 'Nov 19th 2022, 02:31 PM EST' },
      { label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST' },
    ],
  },
});
