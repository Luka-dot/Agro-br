const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { validationResult, matchedData} = require('express-validator');

const State  = require('../models/State');

const User  = require('../models/User');
const Category  = require('../models/Category');
const Ad  = require('../models/Ad');
const { Mongoose } = require('mongoose');


module.exports = {
    getStates: async (req, res) => {
        let states = await State.find();
        res.json({states});
    },
   
    info: async (req, res) => {
        let token = req.query.token;

        const user = await User.findOne({token});
        const state = await State.findById(user.state);       
        const ads = await Ad.find({idUser: user._id.toString()}); 

        let adList = [];
        for(let i in ads){
            
            const cat = await Category.findById(ads[i].category);
            adList.push({...ads[i]._doc, category: cat.slug });     
            
            
           
        }

        res.json({
            name: user.name,               
            cep: user.cep,
            rua: user.rua,
            numero: user.numero,
            complemento: user.complemento,
            bairro: user.bairro,
            cidade: user.cidade,
            state: state.name,
            ddd: user.ddd,
            celular: user.celular,  
            email: user.email,            
            ads: adList
        });
    },
    editAction: async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            res.json({error: errors.mapped()});
            return;
        }
        const data = matchedData(req);

        

        let updates = {};

        if(data.name) {
            updates.name = data.name;
        }
        if(data.cep) {
            updates.cep = data.cep;
        }
        if(data.rua) {
            updates.rua = data.rua;
        }
        if(data.numero) {
            updates.numero = data.numero;
        }
        if(data.complemento) {
            updates.complemento = data.complemento;
        }
        if(data.bairro) {
            updates.bairro = data.bairro;
        }
        if(data.cidade) {
            updates.cidade = data.cidade;
        }
        if(data.ddd) {
            updates.ddd = data.ddd;
        }
        if(data.celular) {
            updates.celular = data.celular;
        }
        
        if(data.email) {
            const emailCheck = await User.findOne({email: data.email});
            if(emailCheck){
                res.json({error: 'E-mail já existente'});
                return;
            }
            updates.email = data.email;
        }

        if(data.state){
                if(mongoose.Types.ObjectId.isValid(data.state)){
                const stateCheck = await State.findById(data.state);
                if(!stateCheck){
                    res.json({error:'Estado não liberado '});
                    return;
                }
                updates.state = data.state;
            } else{
                res.json({error:'Estado não liberado '});
                    return;
            }
        }

       

        if(data.password){
            updates.passwordHash = await bcrypt.hash(data.password, 10);
        }


        await User.findOneAndUpdate({token: data.token}, {$set: updates});

        res.json({});
    }
    // destroy: async (req, res) => {

    //    let token = req.params.token;
    //     const user =  User.deleteOne({token: token}, (erro) => {
    //         if(erro) return res.status(400).json({
    //             error: true,
    //             message: "Error: Usuário não foi apagado , Entre em contato: suporte@agroebrasil.com.br"
    //         });
    //         return res.json({
    //             error: false,
    //             message: "Usuário excluído"
    //         });
    //     });

       
        
    // }
}; 