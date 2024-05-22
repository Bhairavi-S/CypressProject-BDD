export class ProductPage{
    static addProductToCart = (productName, quantity) => {
        cy.contains('.product-name', productName)
          .parents('.product')
          .within(() => {
            for (let i = 1; i < quantity; i++) {
              cy.get('a.increment').click();
            }
            cy.get('.quantity').should('have.value', quantity.toString());
            cy.contains('ADD TO CART').click();
          });
        };

    static searchProductBar =(productName) => {
      cy.get('.search-keyword').type('Onion');
      cy.get('.search-button').click();
    }
}