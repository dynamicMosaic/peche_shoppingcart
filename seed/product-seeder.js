var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true });

var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Tattoo_of_Hand_of_Fatima%2C_model_Casini.jpg/800px-Tattoo_of_Hand_of_Fatima%2C_model_Casini.jpg',
        title: 'tattoo gun',
        description: 'beautiful gun',
        price: 100
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Tattoo_of_Hand_of_Fatima%2C_model_Casini.jpg/800px-Tattoo_of_Hand_of_Fatima%2C_model_Casini.jpg',
        title: 'tattoo gun',
        description: 'beautiful gun',
        price: 100
    }),
    new Product({
        imagePath: 'https://s3-us-east-2.amazonaws.com/tattoo-media/wp-content/uploads/2017/12/20152557/17-ryan-ashley-malarkey.jpg',
        title: 'tattoo gun',
        description: 'beautiful gun',
        price: 100
    }),
    new Product({
        imagePath: 'https://en.wikipedia.org/wiki/Tattoo#/media/File:Anchor_tattoo_and_sketch.jpg',
        title: 'tattoo gun',
        description: 'beautiful gun',
        price: 100
    }),
];

var done = 0;
for (var i = 0; i < products.length; i++){
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit()
        }
    });
}

function exit(){
    mongoose.disconnect();
}

