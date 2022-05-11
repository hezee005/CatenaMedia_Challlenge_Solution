/// <reference types="Cypress" />
import LandingPage from "../support/pageObjects/LandingPage"
import Homepage from "../support/pageObjects/Homepage"

const landingPage = new LandingPage()
const homepage = new Homepage

const inventoryPage = "/inventory.html"
const emptyUsernameErrorMessage = 'Epic sadface: Username is required'
const emptyPasswordErrorMessage = 'Epic sadface: Password is required'

describe ("First Test", function(){
  
      beforeEach(() => {
        cy.fixture("testData").then(function(data) {
          this.data = data
      })
        cy.visit(Cypress.env("baseUrl"))
      })

      afterEach(() => {
        cy.wait(3000)
      })

    it ("Successful Login", function() {
      landingPage.getUsernameInputField().type(this.data.login.validUser)
      landingPage.getPasswordInputField().type(this.data.validPassword);
      landingPage.getLoginButton().click()
      cy.location("pathname").should('eq', inventoryPage)
      homepage.getHomepageLogo().should("be.visible")
    })

    it ("Successful Login Follow by LogOut", function() {
      landingPage.getUsernameInputField().type(this.data.login.problemUser)
      landingPage.getPasswordInputField().type(this.data.validPassword);
      landingPage.getLoginButton().click()
      cy.location("pathname").should('equal', inventoryPage)
      homepage.getBurgerMenu().click()
      homepage.getLogoutButton().click()
    })

    it ("Unsuccessful Login With Invalid Login Credentials", function() {
      landingPage.getUsernameInputField().type(this.data.login.InvalidUsername)
      landingPage.getPasswordInputField().type(this.data.wrongPassword);
      landingPage.getLoginButton().click()
      landingPage.getinvalidCredentialErrorMessage().should("be.visible")
      landingPage.getinvalidCredentialErrorMessage().should("have.text",this.data.errorMessages.invalidCredential)
      cy.location("pathname").should('not.eq', inventoryPage)
    })

    
    it ("Unsuccessful Login With Empty Username", function() {
      landingPage.getUsernameInputField().invoke("val","")
      landingPage.getLoginButton().click()
      landingPage.getEmptyInputErrorMessage().should("be.visible")
      landingPage.getEmptyInputErrorMessage().should("have.text",this.data.errorMessages.emptyUsername)
    })

    it ("Unsuccessful Login With Empty Password", function() {
      landingPage.getUsernameInputField().type(" ")
      landingPage.getPasswordInputField().clear()
      landingPage.getLoginButton().click()
      landingPage.getEmptyInputErrorMessage().should("be.visible")
      landingPage.getEmptyInputErrorMessage().should("have.text", this.data.errorMessages.emptyPassword)
    })

    it ("Unsuccessful With Locked Out User", function() {
      landingPage.getUsernameInputField().type(this.data.login.lockOutUser)
      landingPage.getPasswordInputField().type(this.data.validPassword)
      landingPage.getLoginButton().click()
      landingPage.getLockOutErroMessage().should("be.visible")
      landingPage.getLockOutErroMessage().should("have.text", this.data.errorMessages.lockedUser)
    })

  })