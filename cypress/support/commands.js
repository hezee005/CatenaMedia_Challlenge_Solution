
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

// Cypress.Commands.add('login', (username, password) => { 
//     cy.get()

// })

Cypress.Commands.add('selectProduct', (productName) => { 
    cy.get("h4.card-title").each(function ($el, index, $list) {
        if( $el.text().includes(productName))
        {
             cy.get("button.btn.btn-info").eq(index).click()
        }
    
     })     
     })
//  //Iterating/searching for element through array, and clicking a specified element
//  cy.get("@allProducts").find(".product").each(($el, index, $list) => {

//     const currentVeg = $el.find("h4.product-name").text()
//     if(currentVeg.includes("Carrot")) {
//         cy.wrap($el).find('button[type="button"]').click()
//     }
// })
// //"productName":["Blackberry", "iphone X","Samsung Note"]
//  //click on shop
//  homepage.getShopTab().click()
//  //get all available products and loop through to get the specific element to test with from function in support
 
//  this.data.productName.forEach(element => {
     
//      cy.selectProduct(element)
     
//  });