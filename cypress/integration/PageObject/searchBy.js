///  <reference types="cypress"/>

class searchBy{

landing(){
  cy.clearCookies()
  cy.clearLocalStorage()
  const home = cy.visit("https://www.bitfinex.com/")
   home.wait(2000)
   return this;
    }
             
searchIcon(){

    const icon= cy
    .get('[class="landing-tickers__search"]')
    .get('[data-icon="search"]')
    .contains("search")
    icon.click({force: true})
    icon.wait(1000)
}
inputSearch(){
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

    pickResult(){
      const selectResult = cy
     .get('.landing-tickers__table')
     .get('tbody > tr > .price-cell')
     selectResult.click({force:true})
     selectResult.wait(5000)
     return this;
    }
    verifyURL(){
      const url = cy.url()
      url.should('be.equal','https://trading.bitfinex.com/t/LEO:USD?demo=true')
    }
      
}



export default searchBy