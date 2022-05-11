/// <reference types="Cypress" />

/// <reference types="Cypress" />
import LandingPage from "../support/pageObjects/LandingPage"
import Homepage from "../support/pageObjects/Homepage"

const landingPage = new LandingPage()
const homepage = new Homepage

describe ("Carts Tests", function(){
  
      beforeEach(() => {
        cy.fixture("testData").then(function(data) {
          this.data = data
      })
        cy.visit(Cypress.env("baseUrl"))
      })
      afterEach(() => {
        cy.wait(3000)
      })

    it ("Successful Add item to cart", function() {
      landingPage.getUsernameInputField().type(this.data.login.validUser)
      landingPage.getPasswordInputField().type(this.data.validPassword);
      landingPage.getLoginButton().click()

      cy.get("a#item_4_title_link>div").should("be.visible")
      cy.get("button[data-test='add-to-cart-sauce-labs-backpack']").click()
      cy.wait(3000)
      cy.get('[data-test="remove-sauce-labs-backpack"]').click()


    })

  })