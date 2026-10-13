import { products } from './products.js';

export const cartData = [

    {
        productsToAdd: [
            products.backpack,
            products.bikeLight
        ],
        productToRemove: products.backpack,
        expectedBadgeAfterAdd: '2',
        expectedBadgeAfterRemove: '1'
    },

    {
        productsToAdd: [
            products.backpack,
            products.bikeLight
        ],
        productToRemove: products.bikeLight,
        expectedBadgeAfterAdd: '2',
        expectedBadgeAfterRemove: '1'
    },

    {
        productsToAdd: [
            products.bikeLight,
            products.fleeceJacket
        ],
        productToRemove: products.fleeceJacket,
        expectedBadgeAfterAdd: '2',
        expectedBadgeAfterRemove: '1'
    }

];