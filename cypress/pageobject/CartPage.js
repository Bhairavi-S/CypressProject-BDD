export class CartPage{
    static removeProductFromCart = (productName) => {
        cy.contains('.product-name', productName)
          .parents('.cart-item')
          .within(() => {
            cy.get('a.product-remove').click();
          });
      };
    static goToCartPreview(){
        cy.get('.cart-icon > img').click();
    }

    static proceedToCheckout() {
        cy.get('.cart-preview > .action-block > button').click();
      }

    static applypromoCode(){
       cy.get('.promoCode').type('PROMO001')
       cy.get('.promoBtn').click();
       cy.get('.promoInfo',{ timeout: 10000 }).should('be.visible');
    }
}