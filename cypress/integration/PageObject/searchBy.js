///  <reference types="cypress"/>

class searchBy{

landing(){
  cy.clearCookies()
  cy.clearLocalStorage()
  const home = cy.visit("https://www.bitfinex.com/")
   home.wait(2000)
   return this;
    }
             
search(){

    const searchIcon= cy
    .get('[class="landing-tickers__search"]')
    .get('[data-icon="search"]')
    .contains("search")
    searchIcon.click({force: true})
    searchIcon.wait(1000)
    const testData = require("../../fixtures/searchBy.json");
    testData.forEach((testDataRow) => {
      const data = {
        name: testDataRow.name
        };
      context(`Generating a test for ${data.name}`, () => {
        const typeSearch = cy
        .get('.visible-desktop > .bp3-input-group > .bp3-input')
        typeSearch.type(data.name,'{enter}')
      }
    )
     return this;
      }
    )}
      
}



export default searchBy