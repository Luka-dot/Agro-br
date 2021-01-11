const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const modelSchema = new mongoose.Schema({
    idUser: String,
    title: String,
    price: String,
    priceNegotiable: Boolean,
    description: String,
    category: String,
    images: [Object]
});

module.exports = mongoose.model('Ad', modelSchema)

// const modelName = 'Ad';

// if(mongoose.connection && mongoose.connection.models[modelName]){
//     module.exports = mongoose.connection.models[modelName];
// } else {
//     module.exports = mongoose.model(modelName, modelSchema);
// }

// const modelSchema = new mongoose.Schema({
//     idUser: String,
//     state: String,
//     category: String,
//     images: [Object],
//     dateCreated: Date,
//     title: String,
//     price: Number,
//     priceNegotiable: Boolean,
//     description: String,
//     views: Number,
//     status: String
    
//  });