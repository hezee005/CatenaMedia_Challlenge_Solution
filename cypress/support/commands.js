
     Cypress.Commands.add('selectSingleProduct', (singleProducToAddtName) => { 
        cy.get("div.inventory_item_name").each(function ($el, index, $list) {
            if( $el.text().includes(singleProducToAddtName))
            {
                 cy.get("button.btn.btn_primary.btn_small.btn_inventory").eq(index).click()
            }
        
         })     
         })

    Cypress.Commands.add('selectMultipleProducts', (MultipleProductsToAddtName) => { 
            cy.get("div.inventory_item_name").each(function ($el, index, $list) {
                if( $el.text().includes(MultipleProductsToAddtName))
                {
                     cy.get("button.btn.btn_primary.btn_small.btn_inventory").eq(index).click()
                }
            
             })     
             })
