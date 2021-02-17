///  <reference types="cypress"/>

import searchBy from "../PageObject/searchBy.js";

const bitfinex = new searchBy();

Given('I visit the homepage', () => {
  bitfinex.landing();
});

When('Then I click on the ticker table Search icon', () => {
  bitfinex.search();
});

When('Search for: Unus Sed Leo', () => {});

When('Click on the search result', () => {});

Then('Assert that the page URL', () => {});
