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

    getAllProducts() {
        return cy.get("div.inventory_list")
    }

    getListOfAllProducts() {
        return cy.get('div.inventory_item_name')
    }

    getCartButton() {
        return cy.get('.shopping_cart_link')
    }



}

export default Homepage;



