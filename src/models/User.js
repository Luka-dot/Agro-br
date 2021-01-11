const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const modelSchema = new mongoose.Schema({
    name: String,    
    cep: String,
    rua: String,
    numero: String,
    complemento: String,
    bairro: String,
    cidade: String,
    state: String,
    ddd: String,
    celular: String,
    email: String,
    passwordHash: String,
    token: String
});

const modelName = 'User';

if(mongoose.connection && mongoose.connection.models[modelName]){
    module.exports = mongoose.connection.models[modelName];
} else {
    module.exports = mongoose.model(modelName, modelSchema);
}