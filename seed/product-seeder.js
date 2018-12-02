var Product = require('../models/product');

var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true });

var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Tattoo_of_Hand_of_Fatima%2C_model_Casini.jpg/800px-Tattoo_of_Hand_of_Fatima%2C_model_Casini.jpg',
        title: '1',
        description: 'beautiful gun',
        price: 100
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Tattoo_of_Hand_of_Fatima%2C_model_Casini.jpg/800px-Tattoo_of_Hand_of_Fatima%2C_model_Casini.jpg',
        title: '2',
        description: 'beautiful gun',
        price: 100
    }),
    new Product({
        imagePath: 'https://i.ebayimg.com/images/g/~YMAAOSwVtZaMM28/s-l640.jpg',
        title: '3',
        description: 'beautiful gun',
        price: 100
    }),
    new Product({
        imagePath: 'https://www.tattoomachineequipment.com/wp-content/uploads/2011/09/cutback-tattoo-machine-MTH.jpg',
        title: '4',
        description: 'beautiful gun',
        price: 100
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Tattoo_of_Hand_of_Fatima%2C_model_Casini.jpg/800px-Tattoo_of_Hand_of_Fatima%2C_model_Casini.jpg',
        title: '5',
        description: 'beautiful gun',
        price: 100
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Tattoo_of_Hand_of_Fatima%2C_model_Casini.jpg/800px-Tattoo_of_Hand_of_Fatima%2C_model_Casini.jpg',
        title: '6',
        description: 'beautiful gun',
        price: 100
    }),
    new Product({
        imagePath: 'https://i.ebayimg.com/images/g/~YMAAOSwVtZaMM28/s-l640.jpg',
        title: '7',
        description: 'beautiful gun',
        price: 100
    }),
    new Product({
        imagePath: 'https://www.tattoomachineequipment.com/wp-content/uploads/2011/09/cutback-tattoo-machine-MTH.jpg',
        title: '8',
        description: 'beautiful gun',
        price: 100
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Tattoo_of_Hand_of_Fatima%2C_model_Casini.jpg/800px-Tattoo_of_Hand_of_Fatima%2C_model_Casini.jpg',
        title: '9',
        description: 'beautiful gun',
        price: 100
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Tattoo_of_Hand_of_Fatima%2C_model_Casini.jpg/800px-Tattoo_of_Hand_of_Fatima%2C_model_Casini.jpg',
        title: '10',
        description: 'beautiful gun',
        price: 100
    }),
    new Product({
        imagePath: 'https://i.ebayimg.com/images/g/~YMAAOSwVtZaMM28/s-l640.jpg',
        title: '11',
        description: 'beautiful gun',
        price: 100
    }),
    new Product({
        imagePath: 'https://www.tattoomachineequipment.com/wp-content/uploads/2011/09/cutback-tattoo-machine-MTH.jpg',
        title: '12',
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

