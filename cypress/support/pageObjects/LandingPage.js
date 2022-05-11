/// <reference types="Cypress" />

class LandingPage

{
    
    getUsernameInputField() {

        return cy.get("input[placeholder='Username']")
    }

    getPasswordInputField() {

        return cy.get("input[placeholder='Password']")
    }

    getLoginButton() {

        return cy.get("input.submit-button.btn_action")
    }

    getEmptyInputErrorMessage() {

        return cy.get(".error-message-container")
    }
    
    getLockOutErroMessage() {

        return cy.get("h3[data-test='error']")
    }
    getinvalidCredentialErrorMessage() {

        return cy.get('[data-test="error"]')
    }
    
    

}

export default LandingPage;