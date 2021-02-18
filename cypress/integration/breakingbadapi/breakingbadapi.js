///  <reference types="cypress"/>

import breakingBad from "../PageObject/breakingBad.js";

const breaking = new breakingBad();

Given("Get Walter White information", () => {
  breaking.getBirthDay();
});

When("Print in console birthday only", () => {
 
});

When("Get all characters information", () => {
 breaking.getcharacters();
});
Then("Print all characters information", () => {
 
});
