///  <reference types="cypress"/>

import searchBy from "../PageObject/searchBy.js";

const bitfinex = new searchBy();

Given("I visit the homepage", () => {
  bitfinex.landing();
});

When("Then I click on the ticker table Search icon", () => {
  bitfinex.searchIcon();
});

When("Search for: Unus Sed Leo", () => {
  bitfinex.inputSearch();
});

When("Click on the search result", () => {
  bitfinex.pickResult();
});

Then("Assert that the page URL", () => {
  bitfinex.verifyURL();
});
