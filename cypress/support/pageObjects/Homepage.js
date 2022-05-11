/// <reference types="Cypress" />

class Homepage

{
    
    getHomepageLogo() {

        return cy.get(".app_logo")
    }

    getBurgerMenu() {

        return cy.get("#react-burger-menu-btn")
    }

    getLogoutButton() {

        return cy.get("#logout_sidebar_link")
    }

    


}

export default Homepage;



