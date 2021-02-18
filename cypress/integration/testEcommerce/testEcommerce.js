///  <reference types="cypress"/>

import cartPage from "../PageObject/cartPage.js";

const shopping = new cartPage();

Given("I visit the homepage", () => {
  shopping.landing();
});

When("Add item to shopping cart", () => {
  shopping.addToCart();
});

When("Remove item inside the shopping cart", () => {
  shopping.deleteProduct();
});

When("Search item", () => {
  shopping.search();
  
});

Then("Validate store information", () => {
  
});
