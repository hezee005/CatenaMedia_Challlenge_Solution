/// <reference types="Cypress" />

/// <reference types="Cypress" />
import LandingPage from "../support/pageObjects/LandingPage"
import Homepage from "../support/pageObjects/Homepage"
import CartPage from "../support/pageObjects/CartPage"

const landingPage = new LandingPage()
const homepage = new Homepage
const cartPage = new CartPage

describe ("Carts Tests", function(){
  
      beforeEach(() => {
        cy.fixture("testData").then(function(data) {
          this.data = data
      })
        cy.visit(Cypress.env("baseUrl"))
      })
      afterEach(() => {
        cy.wait(2000)
      })

    it ("Verify users can see total number of products available", function() {
      landingPage.getUsernameInputField().type(this.data.login.validUser)
      landingPage.getPasswordInputField().type(this.data.validPassword);
      landingPage.getLoginButton().click()
      cy.location("pathname").should('eq', this.data.inventoryPageDirectory)

      homepage.getListOfAllProducts().should("have.length", this.data.totalProductsAvailable)

      // cy.get("a#item_4_title_link>div").should("be.visible")
      // cy.get("button[data-test='add-to-cart-sauce-labs-backpack']").should("be.visible").click()

      homepage.getCartButton().should("be.visible")
 
    })

      it ("Successful Multiple items to cart", function() {
        landingPage.getUsernameInputField().type(this.data.login.validUser)
        landingPage.getPasswordInputField().type(this.data.validPassword);
        landingPage.getLoginButton().click()
        cy.location("pathname").should('eq', this.data.inventoryPageDirectory)
  
  
        this.data.MultipleProductsToAddtName.forEach(function(element) {
   
          cy.selectMultipleProducts(element)
        });
        homepage.getCartButton().click()
        cartPage.getRemoveButton().should("be.visible")
        
    })

    it ("Successful Add a single item to cart", function() {
      landingPage.getUsernameInputField().type(this.data.login.validUser)
      landingPage.getPasswordInputField().type(this.data.validPassword);
      landingPage.getLoginButton().click()
      cy.location("pathname").should('eq', this.data.inventoryPageDirectory)


      this.data.singleProducToAddtName.forEach(function(element) {
 
        cy.selectSingleProduct(element)
      });
    })

  




  })