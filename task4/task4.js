"use strict";

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
// выбираем продукцию с фотографиями
let productsWithPhoto = products.filter(function (product) {
    if ("photos" in product && product.photos.length > 0) {
        return product;
    }
});
console.log(productsWithPhoto);

// сортируем продукцию по цене
products.sort(function (a, b) {
    if (a.price < b.price) {
        return -1;
    }
    if (a.price > b.price) {
        return 1;
    }
    return 0;
});
console.log(products);