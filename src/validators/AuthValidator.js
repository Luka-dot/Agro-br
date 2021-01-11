const { checkSchema } = require('express-validator');

module.exports = {
    signup: checkSchema({
        name: {
            trim: true,
            notEmpty: true,
            isLength:{
                options: {min: 2}
            },
            errorMessage: 'Nome precisa ter no minimo 2 caracteres'
        },    
        cep: {
            trim: true,
            notEmpty: true,
            isLength:{
                options: {min: 2}
            },
            errorMessage: 'Cep precisa ter no minimo 8 caracteres'
        },
        rua: {
            trim: true,
            notEmpty: true,
            isLength:{
                options: {min: 2}
            },
            errorMessage: 'Rua precisa ter no minimo 2 caracteres'
        },
        numero: {
            trim: true,
            notEmpty: true,
            isLength:{
                options: {min: 2}
            },
            errorMessage: 'Numero precisa ter no minimo 2 caracteres'
        },
        complemento: {
            trim: true,
            notEmpty: true,
            
            
        },
        bairro: {
            trim: true,
            notEmpty: true,
            isLength:{
                options: {min: 2}
            },
            errorMessage: 'Bairro precisa ter no minimo 2 caracteres'
        },
        cidade: {
                trim: true,
                notEmpty: true,
                isLength:{
                    options: {min: 3}
                },
                errorMessage: 'Cidade precisa ter no minimo 3 caracteres'
            },
            state:{
                notEmpty: true,
                errorMessage: 'Estado não preenchido'
            
            },
            ddd: {
                trim: true,
                notEmpty: true,
                isLength:{
                    options: {min: 2}
                },
                errorMessage: 'DDD precisa ter no minimo 2 caracteres'
            },
            celular: {
                trim: true,
                notEmpty: true,
                isLength:{
                    options: {min: 9}
                },
                errorMessage: 'Celular precisa ter no minimo 9 caracteres'
            },
       
        email:{
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'E-mail inválido'
        },
        password:{
            isLength:{
                options: { min: 2}
            },
            errorMessage: 'Senha precisa ter no minimo 2 caracteres'
        }
        
       
    }),
    signin: checkSchema({
        email:{
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'E-mail inválido'
        },
        password:{
            isLength:{
                options: { min: 2}
            },
            errorMessage: 'Senha precisa ter no minimo 2 caracteres'
        }
    })
};