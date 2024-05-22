/// <reference types="cypress" />

import { ProductPage } from "../../pageobject/ProductPage";
import { CartPage } from "../../pageobject/CartPage";

beforeEach(() => {
  cy.visit('/');
})
describe('Shopping Cart Tests', () => {
    it('should add and remove products from the cart', () => {
      ProductPage.addProductToCart('Brocolli - 1 Kg', 3);
      ProductPage.addProductToCart('Beetroot - 1 Kg', 2);
      ProductPage.addProductToCart('Cucumber - 1 Kg', 3);
  
      CartPage.goToCartPreview();
  
      CartPage.removeProductFromCart('Cucumber - 1 Kg');
  
      CartPage.proceedToCheckout();

      CartPage.applypromoCode();
    });

    it('should search for a product using the search bar', () => {
      const productName = 'Onion - 1 Kg'
      ProductPage.searchProductBar(productName)
      cy.get('.products').should('be.visible');
      cy.contains('.product',productName).should('be.visible')
    })
    
 });

