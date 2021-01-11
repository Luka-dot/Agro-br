const { checkSchema } = require('express-validator');

module.exports = {
    editAction: checkSchema({
        token:{
            notEmpty: true
        },
        name: {
            optional: true,
            trim: true,
            notEmpty: true,
            isLength:{
                options: {min: 2}
            },
            errorMessage: 'Nome precisa ter no minimo 2 caracteres'
        },
        cep: {
            optional: true,
            trim: true,
            notEmpty: true,
            isLength:{
                options: {min: 8}
            },
            errorMessage: 'Cep precisa ter no minimo 8 caracteres'
        },
        rua: {
            optional: true,
            trim: true,
            notEmpty: true,
            isLength:{
                options: {min: 3}
            },
            errorMessage: 'Rua precisa ter no minimo 3 caracteres'
        },
        numero: {
            optional: true, 
            trim: true,
            notEmpty: true,
            isLength:{
                options: {min: 1}
            },
            errorMessage: 'Numero precisa ter no minimo 1 caractere'
        },
        complemento: {
            optional: true,
            trim: true,
            notEmpty: true,
            isLength:{
                options: {min: 2}
            },
            errorMessage: 'Complemento precisa ter no minimo 2 caracteres'
        },
        bairro: {
            optional: true,
            trim: true,
            notEmpty: true,
            isLength:{
                options: {min: 4}
            },
            errorMessage: 'bairo precisa ter no minimo 4 caracteres'
        },
        cidade: {
            optional: true,
            notEmpty: true,
            errorMessage: 'Cidade não preenchido'
        },
        ddd: {
            optional: true,
            notEmpty: true,
            errorMessage: 'ddd não preenchido'
        },
        celular: {
            optional: true,
            notEmpty: true,
            errorMessage: 'Celular não preenchido'
        },
        state:{
            optional: true,
            notEmpty: true,
            errorMessage: 'Estado não preenchido'
        },        

        email:{
            optional: true,
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'E-mail inválido'
        },
        password:{
            optional: true,
            isLength:{
                options: { min: 2}
            },
            errorMessage: 'Senha precisa ter no minimo 2 caracteres'
        }        
        
    })
   
};