///  <reference types="cypress"/>

class cartPage {
  landing() {
    cy.clearCookies();
    cy.clearLocalStorage();
    const home = cy.visit("http://automationpractice.com/index.php");
    home.wait(2000);
    return this;
  }

  addToCart() {
    const prod = cy
      .get('[class="right-block"]')
      .get('[class="product-name"]')
      .contains("Faded Short Sleeve T-shirts");
    prod.click({ force: true });
    prod.wait(3000);
    const cartButton = cy
      .get('[id="add_to_cart"]')
      .get('[type="submit"]')
      .contains("Add to cart");
    cartButton.click({ force: true });
    const veriFyCart = cy
      .get('[class="clearfix"]')
      .get('.layer_cart_product > h2')
      veriFyCart.should(
      "contain",
      "Product successfully added to your shopping cart"
    );
    veriFyCart.wait(3000)
    return this;
  }
deleteProduct(){
  const checkOut = cy
  .get('.button-medium > span')
  .get('[title="Proceed to checkout"]')
  .contains('Proceed to checkout')
  checkOut.click({ force: true })
  checkOut.wait(3000)
  const trashBin = cy
  .get('[class="cart_quantity_delete"]')
  .get('.icon-trash')
  trashBin.click({ force: true })
  trashBin.wait(3000)
  const cartEmpty = cy
  .get('[class="alert alert-warning"]')
  cartEmpty.should('contain','Your shopping cart is empty.')
  return this;
}

  search() {
    const testData = require("../../fixtures/searchBy.json");
    testData.forEach((testDataRow) => {
      const data = {
        name: testDataRow.name,
        name2: testDataRow.name2
      };
      context(`Generating a test for ${data.name}`, () => {
        const typeSearch = cy.get('#search_query_top')
        typeSearch.type(data.name);
        const searchButton = cy
        .get('#searchbox > .btn')
        searchButton.click({ force: true })
        searchButton.wait(2000)
        const verifySearch = cy
      .get('.right-block > h5 > .product-name')
      verifySearch.should('contain',`${data.name}`)
      const typeSearch2 = cy.get('#search_query_top')
      typeSearch2.clear()
        typeSearch2.type(data.name2);
      const searchButton2 = cy
        .get('#searchbox > .btn')
        searchButton2.click({ force: true })
        searchButton2.wait(2000)
        const noResults = cy
        .get('[class="alert alert-warning"]')
        noResults.should('contain',`${data.name2}`)
        noResults.should('contain','No results were found for your search')
      }
      )
      return this;
    });
  }
  storeInfo(){
    const info = cy
    .get('#block_contact_infos > div')
    .scrollIntoView().invoke('text')
    info.should('contain','Store information')
    info.should('contain','Selenium Framework')
    info.should('contain','Call us now:')
    info.should('contain','(347) 466-7432')
    info.should('contain','Email:')
    info.should('contain','support@seleniumframework.com')
    return this;
}
}
export default cartPage;
