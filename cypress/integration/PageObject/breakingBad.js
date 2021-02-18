///  <reference types="cypress"/>

class breakingBad {
 
  getBirthDay() {
    const data = require("../../fixtures/getBirth.json");
    cy.request("GET","https://breakingbadapi.com/api/characters?",data)
      .then((resp) => {
        expect(resp.status).to.eq(200);
        expect(resp.body).to.not.eq(null);
        console.log(resp)
        const btDay = resp.body[0].birthday;
        localStorage.setItem("birthday", btDay)
        console.log('Walter White Birthday:',btDay);
    }
      )
  }
    getcharacters(){
      cy.request("GET","https://breakingbadapi.com/api/characters/")
      .then((resp) => {
        expect(resp.status).to.eq(200);
        expect(resp.body).to.not.eq(null);
        console.log(resp)
        const inforChar = resp.body
        inforChar.map(item => {})
        /*console.log('Character name:', resp.body[0].name)
        console.log('Portrayed:', resp.body[0].portrayed)
        console.log('------------------------------------------------------')
        console.log('Character name:', resp.body[1].name)
        console.log('Portrayed:', resp.body[1].portrayed)*/
      }
      )
  }
    
}

export default breakingBad;
