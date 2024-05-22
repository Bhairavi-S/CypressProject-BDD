// cypress/support/step_definitions/shopping_cart_steps.js
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { ProductPage } from "../../pageobject/ProductPage";
import { CartPage } from "../../pageobject/CartPage";

Given('I am on the homepage', () => {
  cy.visit('/');
});

When('I add {int} units of {string} to the cart', (quantity, productName) => {
  ProductPage.addProductToCart(productName, quantity);
});

When('I navigate to the cart preview', () => {
  CartPage.goToCartPreview();
});

When('I remove {string} from the cart', (productName) => {
  CartPage.removeProductFromCart(productName);
});

When('I proceed to checkout', () => {
  CartPage.proceedToCheckout();
});

When('I search for {string} using the search bar', (productName) => {
  ProductPage.searchProductBar(productName);
});

Then('I should see the product {string} in the search results', (productName) => {
  cy.get('.products').should('be.visible');
  cy.contains('.product', productName).should('be.visible');
});
