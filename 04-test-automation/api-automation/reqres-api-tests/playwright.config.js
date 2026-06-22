// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  reporter: [['list'], ['html']],
  use: {
    baseURL: 'https://reqres.in/api/'
  }
});